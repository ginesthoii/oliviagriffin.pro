/* =========================
   LOADER COMPONENT
========================= */

/* Inject loader into page */
document.addEventListener("DOMContentLoaded", async () => {

  try {
    const res = await fetch("/components/loader/loader.html");
    const html = await res.text();

    document.body.insertAdjacentHTML("afterbegin", html);

  } catch (err) {
    console.warn("Loader failed to load", err);
  }

});


/* Handle fade out */
window.addEventListener("load", () => {

  const loader = document.getElementById("loading");
  if (!loader) return;

  setTimeout(() => {
    loader.classList.add("hidden");

    setTimeout(() => {
      loader.remove();
    }, 600);

  }, 300);

});