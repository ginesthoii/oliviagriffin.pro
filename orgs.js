// orgs.js
import { ORGS } from "./orgs-data.js";

/* =========================
   STATE
========================= */

let filtered = [...ORGS];
let activeCategory = "All";
let activeTag = null;
let searchQuery = "";

/* =========================
   HELPERS
========================= */

function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* =========================
   TAG COLOR SYSTEM
========================= */

function tagColorClass(tag) {
  const counts = { Security: 0, Homestead: 0, AI: 0, Creative: 0 };

  for (const org of ORGS) {
    if (org.tags?.includes(tag)) {
      counts[org.category] = (counts[org.category] || 0) + 1;
    }
  }

  const best =
    Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] ||
    "Security";

  return `tag--${best.toLowerCase()}`;
}

/* =========================
   CARD BUILDER
========================= */

function createCard(org) {
  const tagsHtml = (org.tags || [])
    .map(tag => {
      const cls = tagColorClass(tag);
      return `<span class="tag ${cls}" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</span>`;
    })
    .join("");

  return `
  <div class="card">
    <div class="card-content">

      <div class="card-image">
        <img src="${escapeHtml(org.image)}" alt="${escapeHtml(org.title)}">
      </div>

      <a href="${escapeHtml(org.orgUrl)}" target="_blank">
        <button class="card-title">${escapeHtml(org.title)}</button>
      </a>

      <div class="card-section">
        <h4>CATEGORY</h4>
        <p>${escapeHtml(org.category)}</p>
      </div>

      <div class="card-section">
        <h4>ABOUT</h4>
        <p>${escapeHtml(org.about)}</p>
      </div>

      <div class="card-section">
        <h4>TECH</h4>
        <p>${escapeHtml(org.tech)}</p>
      </div>

      <div class="card-section tags">
        <h4>TAGS</h4>
        <div class="tag-list">${tagsHtml}</div>
      </div>

    </div>
  </div>`;
}

/* =========================
   RENDER CARDS
========================= */

function renderCards() {
  const container = document.getElementById("orgCards");
  if (!container) return;

  container.innerHTML = filtered.map(createCard).join("");

  setupTagClicks();
  setupPointerGlow();
}

/* =========================
   FILTERING
========================= */

function applyFilters() {
  const q = searchQuery.toLowerCase();

  filtered = ORGS.filter(org => {
    const catMatch =
      activeCategory === "All" || org.category === activeCategory;

    const tagMatch =
      !activeTag || (org.tags || []).includes(activeTag);

    if (!q) return catMatch && tagMatch;

    const blob = [
      org.title,
      org.about,
      org.tech,
      (org.tags || []).join(" ")
    ]
      .join(" ")
      .toLowerCase();

    return catMatch && tagMatch && blob.includes(q);
  });

  renderCards();
}

/* =========================
   UI WIRING
========================= */

function setupSearch() {
  const input = document.getElementById("orgSearch");
  if (!input) return;

  input.addEventListener("input", e => {
    searchQuery = e.target.value;
    applyFilters();
  });
}

function setupCategoryFilters() {
  document.querySelectorAll(".filter-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;

      document.querySelectorAll(".filter-pill")
        .forEach(b => b.classList.remove("is-active"));

      btn.classList.add("is-active");

      applyFilters();
    });
  });
}

function setupTagClicks() {
  document.querySelectorAll(".tag").forEach(tag => {
    tag.addEventListener("click", () => {

      const t = tag.dataset.tag;
      activeTag = activeTag === t ? null : t;

      const label = document.getElementById("activeTagValue");
      if (label) label.textContent = activeTag || "None";

      applyFilters();
    });
  });
}

function setupClearTag() {
  const btn = document.getElementById("clearTagBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    activeTag = null;
    applyFilters();
  });
}

/* =========================
   POINTER GLOW
========================= */

function setupPointerGlow() {
  document.querySelectorAll(".cards").forEach(cards => {
    cards.addEventListener("pointermove", e => {
      const cardEls = cards.getElementsByClassName("card");

      for (const card of cardEls) {
        const rect = card.getBoundingClientRect();

        const ratioX = (e.clientX - rect.left) / rect.width;
        const ratioY = (e.clientY - rect.top) / rect.height;

        card.style.setProperty("--ratio-x", ratioX);
        card.style.setProperty("--ratio-y", ratioY);
      }
    });
  });
}

/* =========================
   ANALYTICS ENGINE
========================= */

const LANGS = [
  "Python",
  "JavaScript",
  "TypeScript",
  "C++",
  "Rust",
  "Java",
  "PHP"
];

function buildStats() {

  const langStats = {};
  const tagStats = {};
  const categoryStats = {};

  for (const org of ORGS) {

    categoryStats[org.category] =
      (categoryStats[org.category] || 0) + 1;

    for (const tag of (org.tags || [])) {
      tagStats[tag] = (tagStats[tag] || 0) + 1;
    }

    if (org.tech) {
      const parts = org.tech.split("·").map(p => p.trim());
      for (const part of parts) {
        if (LANGS.includes(part)) {
          langStats[part] = (langStats[part] || 0) + 1;
        }
      }
    }
  }

  return { langStats, tagStats, categoryStats };
}

/* =========================
   MICRO DASHBOARD RENDER
========================= */

function initCharts() {

  if (!window.Chart) return;

  const stats = buildStats();

  const TEXT = "#eef2ff";
  const GRID = "rgba(255,255,255,.05)";

  const base = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: TEXT, font: { size: 10 } }
      }
    }
  };

  /* ===== Doughnut — Languages ===== */

  const langCanvas = document.getElementById("langChart");
  if (langCanvas) {
    new Chart(langCanvas, {
      type: "doughnut",
      data: {
        labels: Object.keys(stats.langStats),
        datasets: [{
          data: Object.values(stats.langStats),
          borderWidth: 0
        }]
      },
      options: base
    });
  }

  /* ===== Doughnut — Categories ===== */

  const catCanvas = document.getElementById("categoryChart");
  if (catCanvas) {
    new Chart(catCanvas, {
      type: "doughnut",
      data: {
        labels: Object.keys(stats.categoryStats),
        datasets: [{
          data: Object.values(stats.categoryStats),
          borderWidth: 0
        }]
      },
      options: base
    });
  }

  /* ===== Thin Bar — Tags ===== */

  const tagCanvas = document.getElementById("tagChart");
  if (tagCanvas) {
    new Chart(tagCanvas, {
      type: "bar",
      data: {
        labels: Object.keys(stats.tagStats),
        datasets: [{
          data: Object.values(stats.tagStats),
          barThickness: 10
        }]
      },
      options: {
        ...base,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: TEXT }, grid: { display: false } },
          y: { ticks: { color: TEXT }, grid: { color: GRID } }
        }
      }
    });
  }

  /* ===== Line — Fake timeline (placeholder) ===== */

  const timelineCanvas = document.getElementById("timelineChart");
  if (timelineCanvas) {
    new Chart(timelineCanvas, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          data: [2,4,3,6,5,7],
          tension: 0.4,
          pointRadius: 2
        }]
      },
      options: {
        ...base,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: TEXT }, grid: { display: false } },
          y: { ticks: { color: TEXT }, grid: { color: GRID } }
        }
      }
    });
  }

  /* ===== Heatmap Tiles ===== */

  const heatmap = document.getElementById("heatmapChart");
  if (heatmap) {
    for (let i = 0; i < 36; i++) {
      const tile = document.createElement("div");
      tile.style.background = `rgba(127,214,255,${0.1 + Math.random()*0.5})`;
      heatmap.appendChild(tile);
    }
  }
}

/* =========================
   INIT
========================= */

window.addEventListener("DOMContentLoaded", () => {

  renderCards();

  setupSearch();
  setupCategoryFilters();
  setupClearTag();

  initCharts();
});
