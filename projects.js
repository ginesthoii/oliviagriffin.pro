// projects.js
import { REPO_SECTIONS } from "./repos-data.js";

const sectionsEl = document.getElementById("sections");
const searchEl = document.getElementById("search");
const tagBarEl = document.getElementById("tagBar");

let activeTag = null;
let searchQuery = "";

const normalize = (s) => (s || "").toLowerCase().trim();

function collectTags() {
  const tags = new Set();
  REPO_SECTIONS.forEach((sec) => {
    sec.items.forEach((it) => (it.tags || []).forEach((t) => tags.add(t)));
  });
  return [...tags].sort((a, b) => a.localeCompare(b));
}

function matchesFilters(item) {
  const q = normalize(searchQuery);
  const hay = normalize(
    [
      item.name,
      item.description,
      (item.tech || []).join(" "),
      (item.tags || []).join(" "),
      item.status,
    ].join(" ")
  );

  const searchOk = !q || hay.includes(q);
  const tagOk = !activeTag || (item.tags || []).includes(activeTag);

  return searchOk && tagOk;
}

function renderTagBar() {
  const tags = collectTags();

  tagBarEl.innerHTML = "";

  const makeTag = (label, isActive) => {
    const btn = document.createElement("button");
    btn.className = `tag ${isActive ? "active" : ""}`;
    btn.type = "button";
    btn.textContent = label;
    btn.addEventListener("click", () => {
      activeTag = activeTag === label ? null : label;
      renderTagBar();
      renderSections();
    });
    return btn;
  };

  tagBarEl.appendChild(makeTag("All", !activeTag));

  tags.forEach((t) => tagBarEl.appendChild(makeTag(t, activeTag === t)));
}

function cardHTML(item) {
  const pills = [
    ...(item.tech || []).slice(0, 4).map((x) => `<span class="pill">${x}</span>`),
    ...(item.tags || []).slice(0, 2).map((x) => `<span class="pill">${x}</span>`),
  ].slice(0, 6);

  return `
    <article class="card" data-name="${item.name}">
      <a href="${item.href}" target="_blank" rel="noopener">
        <div class="card-inner">
          <div class="card-top">
            <h3 class="title">${item.name}</h3>
            <span class="status">${item.status || "Active"}</span>
          </div>

          <div class="media">
            <img src="${item.image}" alt="${item.name}" loading="lazy" />
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

function renderSections() {
  sectionsEl.innerHTML = "";

  REPO_SECTIONS.forEach((sec) => {
    const filteredItems = sec.items.filter(matchesFilters);

    // Hide empty sections when filtering
    if (filteredItems.length === 0) return;

    const section = document.createElement("section");
    section.className = "section";

    section.innerHTML = `
      <h2>${sec.title}</h2>
      ${sec.subtitle ? `<p class="subtitle">${sec.subtitle}</p>` : ""}
      <div class="grid">
        ${filteredItems.map(cardHTML).join("")}
      </div>
    `;

    sectionsEl.appendChild(section);
  });
}

searchEl.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderSections();
});

renderTagBar();
renderSections();
