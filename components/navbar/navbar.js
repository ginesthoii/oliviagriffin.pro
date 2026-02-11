// navbar.js

async function loadNavbar(){
  try {

    // RELATIVE PATH for GitHub Pages subfolder hosting
    const res = await fetch("components/navbar/navbar.html");

    if(!res.ok){
      throw new Error(`Navbar fetch failed: ${res.status}`);
    }

    const html = await res.text();

    const slot = document.getElementById("navbar-slot");
    if(slot) slot.innerHTML = html;

    // Mobile toggle AFTER injection
    const hamb = document.getElementById("hamb");
    const navBg = document.getElementById("navBg");

    if(hamb && navBg){
      hamb.addEventListener("click", () => {
        navBg.classList.toggle("active");
      });
    }

  } catch(err){
    console.error("Navbar load error:", err);
}

document.addEventListener("DOMContentLoaded", loadNavbar);
