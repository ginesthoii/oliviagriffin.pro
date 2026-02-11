// navbar.js
async function loadNavbar(){
  try{

    const slot = document.getElementById("navbar-slot");
    if(!slot){
      console.warn("Navbar slot not found.");
      return;
    }

    // RELATIVE SAFE PATH
    const res = await fetch("./components/navbar/navbar.html");

    if(!res.ok){
      throw new Error(`Navbar fetch failed: ${res.status}`);
    }

    const html = await res.text();
    slot.innerHTML = html;

    // Bind hamburger AFTER inject
    const hamb = document.getElementById("hamb");
    const navBg = document.getElementById("navBg");

    if(hamb && navBg){
      hamb.addEventListener("click", () => {
        navBg.classList.toggle("active");
      });
    }

  }catch(err){
    console.error("Navbar load error:", err);
  }
}

document.addEventListener("DOMContentLoaded", loadNavbar);
