// main.js

document.addEventListener('DOMContentLoaded', () => {

  /* =========================
     Mobile drawer + smooth scroll
  ========================== */
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

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      mob?.classList.remove('active');
      btn?.setAttribute('aria-expanded', 'false');
    });
  });

 
  /* =========================
     Services: mobile carousel
  ========================== */
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

  /* =========================
     Stats: count-up on view
  ========================== */
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

});

 /* =========================
     INTERACTIVE NOISE CARDS
  ========================== */

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

    const onLeave = () => {
      card.style.setProperty('--ratio-x', 0.5);
      card.style.setProperty('--ratio-y', 0.5);
      card.style.setProperty('--mouse-x', '50%');
      card.style.setProperty('--mouse-y', '50%');
    };


