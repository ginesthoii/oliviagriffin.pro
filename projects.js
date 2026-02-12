// projects.js

import { REPO_SECTIONS } from "./repos-data.js";

/* =========================
   DOM
========================= */
const sectionsEl   = document.getElementById("sections");
const searchEl     = document.getElementById("search");
const catBarEl     = document.getElementById("catbar");
const tagSelectEl  = document.getElementById("tagSelect");
const clearBtn     = document.getElementById("clearFilters");

/* =========================
   State
========================= */
let activeCategory = null;   // section id
let activeTag      = "";
let searchQuery    = "";

/* =========================
   Utils
========================= */
const normalize = (s) => (s || "").toLowerCase().trim();

/* =========================
   Collect tags
========================= */
function collectTags() {
  const set = new Set();

  REPO_SECTIONS.forEach(sec => {
    sec.items.forEach(item => {
      (item.tags || []).forEach(t => set.add(t));
    });
  });

  return [...set].sort((a, b) => a.localeCompare(b));
}

/* =========================
   Filtering logic
========================= */
function matchesFilters(item, sectionId) {
  // category
  if (activeCategory && sectionId !== activeCategory) return false;

  // tag
  if (activeTag && !(item.tags || []).includes(activeTag)) return false;

  // search
  const hay = normalize([
    item.name,
    item.description,
    (item.tech || []).join(" "),
    (item.tags || []).join(" "),
    item.status
  ].join(" "));

  if (searchQuery && !hay.includes(searchQuery)) return false;

  return true;
}

/* =========================
   Render category pills
========================= */
function renderCatBar() {
  catBarEl.innerHTML = "";

  const makeCat = (label, id, active) => {
    const btn = document.createElement("button");
    btn.className = `cat ${active ? "active" : ""}`;
    btn.type = "button";
    btn.textContent = label;
    btn.onclick = () => {
      activeCategory = activeCategory === id ? null : id;
      renderCatBar();
      renderSections();
    };
    return btn;
  };

  // All
  catBarEl.appendChild(
    makeCat("All", null, !activeCategory)
  );

  REPO_SECTIONS.forEach(sec => {
    catBarEl.appendChild(
      makeCat(sec.title, sec.id, activeCategory === sec.id)
    );
  });
}

/* =========================
   Render tag dropdown
========================= */
function renderTagSelect() {
  const tags = collectTags();
  tagSelectEl.innerHTML = `<option value="">All tags</option>`;

  tags.forEach(tag => {
    const opt = document.createElement("option");
    opt.value = tag;
    opt.textContent = tag;
    tagSelectEl.appendChild(opt);
  });
}

/* =========================
   Card template
========================= */
function cardHTML(item) {
  const pills = [
    ...(item.tech || []).slice(0, 4).map(x => `<span class="pill">${x}</span>`),
    ...(item.tags || []).slice(0, 2).map(x => `<span class="pill">${x}</span>`)
  ].slice(0, 6);

  return `
    <article class="card">
      <a href="${item.href}" target="_blank" rel="noopener">
        <div class="card-inner">
          <div class="card-top">
            <h3 class="title">${item.name}</h3>
            <span class="status">${item.status || "Active"}</span>
          </div>

          <div class="media">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
          </div>

          <p class="desc">${item.description || ""}</p>

          <div class="meta">
            ${pills.join("")}
          </div>
        </div>
      </a>
    </article>
  `;
}

/* =========================
   Render sections
========================= */
function renderSections() {
  sectionsEl.innerHTML = "";

  REPO_SECTIONS.forEach(sec => {
    const visibleItems = sec.items.filter(item =>
      matchesFilters(item, sec.id)
    );

    if (!visibleItems.length) return;

    const section = document.createElement("section");
    section.className = "section";
    section.innerHTML = `
      <h2>${sec.title}</h2>
      ${sec.subtitle ? `<p class="subtitle">${sec.subtitle}</p>` : ""}
      <div class="grid">
        ${visibleItems.map(cardHTML).join("")}
      </div>
    `;

    sectionsEl.appendChild(section);
  });
}

/* =========================
   Events
========================= */
searchEl.addEventListener("input", e => {
  searchQuery = normalize(e.target.value);
  renderSections();
});

tagSelectEl.addEventListener("change", e => {
  activeTag = e.target.value;
  renderSections();
});

clearBtn.addEventListener("click", () => {
  activeCategory = null;
  activeTag = "";
  searchQuery = "";

  searchEl.value = "";
  tagSelectEl.value = "";

  renderCatBar();
  renderSections();
});

/* =========================
   Init
========================= */
renderCatBar();
renderTagSelect();
renderSections();


document.addEventListener("mousemove", e => {
  document.querySelectorAll(".card").forEach(card => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    card.style.setProperty("--mx", `${x}%`);
    card.style.setProperty("--my", `${y}%`);
  });
});
