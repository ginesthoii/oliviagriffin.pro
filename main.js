// main.js

document.addEventListener('DOMContentLoaded', () => {

  /* =================================================
     MOBILE NAV DRAWER + SAFE SMOOTH SCROLL
  ================================================= */

  const mob = document.getElementById('mobile-nav');
  const btn = document.getElementById('menu-icon');
  const linksDesktop = document.querySelectorAll('.nav-links a');

  if (btn && mob && linksDesktop.length) {
    mob.innerHTML = [...linksDesktop]
      .map(a => `<a href="${a.getAttribute('href')}">${a.textContent}</a>`)
      .join('');

    btn.addEventListener('click', () => {
      const open = !mob.classList.contains('active');
      mob.classList.toggle('active', open);
      btn.setAttribute('aria-expanded', String(open));
    });
  }


  /* =================================================
     SAFE SMOOTH SCROLL
  ================================================= */

  document.querySelectorAll('a[href*="#"]').forEach(link => {
    link.addEventListener('click', e => {

      try {
        const url = new URL(link.href, window.location.origin);

        // Only intercept if SAME PAGE
        if (url.pathname === window.location.pathname && url.hash) {

          const target = document.querySelector(url.hash);

          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });

            mob?.classList.remove('active');
            btn?.setAttribute('aria-expanded', 'false');
          }
        }

      } catch {
        // Fail silently — never break navigation
      }

    });
  });


  /* =================================================
     SERVICES MOBILE CAROUSEL
  ================================================= */

  const track = document.getElementById('servicesTrack');
  const prev = document.querySelector('.services-controls .prev');
  const next = document.querySelector('.services-controls .next');

  if (track && prev && next) {
    const slideBy = () => Math.max(track.clientWidth * 0.8, 280);

    prev.addEventListener('click', () =>
      track.scrollBy({ left: -slideBy(), behavior: 'smooth' })
    );

    next.addEventListener('click', () =>
      track.scrollBy({ left: slideBy(), behavior: 'smooth' })
    );
  }


  /* =================================================
     STATS COUNT-UP
  ================================================= */

  const statsSection = document.querySelector('#stats.stats-section');

  if (statsSection) {

    const DURATION = 1200;
    const ease = t => 1 - Math.pow(1 - t, 3);
    const fmt = new Intl.NumberFormat('en-US');

    const counters = statsSection.querySelectorAll('.stat-count');

    const animate = el => {
      const target = Number(el.dataset.target || 0);
      const start = performance.now();

      const step = now => {
        const t = Math.min(1, (now - start) / DURATION);
        el.textContent = fmt.format(Math.round(target * ease(t)));
        if (t < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        counters.forEach(c => animate(c));
        io.disconnect();
      });
    }, { threshold: 0.3 });

    io.observe(statsSection);
  }


  /* =================================================
     INTERACTIVE NOISE / GLOW CARDS
  ================================================= */

  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    let raf = null;

    const update = (x, y) => {
      card.style.setProperty('--ratio-x', x.toFixed(4));
      card.style.setProperty('--ratio-y', y.toFixed(4));
      card.style.setProperty('--mouse-x', `${(x * 100).toFixed(2)}%`);
      card.style.setProperty('--mouse-y', `${(y * 100).toFixed(2)}%`);
    };

    const onMove = e => {
      if (raf) return;

      raf = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        update(
          Math.min(Math.max(x, 0), 1),
          Math.min(Math.max(y, 0), 1)
        );

        raf = null;
      });
    };

    const onLeave = () => update(0.5, 0.5);

    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);
  });


  /* =================================================
     ORGANIZATION CARD EFFECTS
  ================================================= */

  const cardsWrap = document.getElementById("cards");

  if (cardsWrap) {

    /* Glow Tracking */
    cardsWrap.addEventListener("pointermove", e => {
      const cards = cardsWrap.getElementsByClassName("card");

      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    });

    /* Expandable Cards */
    const expandables = cardsWrap.querySelectorAll(".card.expandable");

    expandables.forEach(card => {

      const toggle = () => {
        const open = card.classList.toggle("open");
        card.setAttribute("aria-expanded", String(open));
      };

      card.addEventListener("click", toggle);

      card.addEventListener("keydown", ev => {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          toggle();
        }
      });

    });
  }


  /* =================================================
     DYNAMIC FOOTER YEAR
  ================================================= */

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});


/* =================================
   STL ABOUT BACKGROUND TRIGGER
================================= */

(function(){

  const aboutMap = document.querySelector('.about-page--map');
  if(!aboutMap) return;

  if(!('IntersectionObserver' in window)){
    aboutMap.classList.add('stl-visible');
    return;
  }

  const observer = new IntersectionObserver((entries, obs)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        aboutMap.classList.add('stl-visible');
        obs.disconnect();
      }
    });
  },{
    threshold: 0.25
  });

  observer.observe(aboutMap);

})();
