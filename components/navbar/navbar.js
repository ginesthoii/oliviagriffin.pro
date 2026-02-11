async function loadNavbar(){
  try{

    // ROOT RELATIVE PATH 
    const res = await fetch("/components/navbar/navbar.html");

    if(!res.ok){
      throw new Error(`Navbar fetch failed: ${res.status}`);
    }

    const html = await res.text();

    document.getElementById("navbar-slot").innerHTML = html;

    // Mobile toggle logic AFTER inject
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

loadNavbar();
