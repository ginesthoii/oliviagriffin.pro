// main.js

document.addEventListener('DOMContentLoaded', () => {
  /* =========================
     Mobile drawer + smooth scroll
  ========================== */
  const mob = document.getElementById('mobile-nav');
  const btn = document.getElementById('menu-icon');
  const linksDesktop = document.querySelectorAll('.nav-links a');

  // Build mobile drawer from desktop links
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

  // Smooth scroll + close drawer
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      const target = document.querySelector(href);

      // If it's not an on-page anchor (or doesn't exist), let it behave normally
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      mob?.classList.remove('active');
      btn?.setAttribute('aria-expanded', 'false');
    });
  });

  /* =========================
     Services: mobile carousel buttons (no libs)
  ========================== */
  const track = document.getElementById('servicesTrack');
  const prev = document.querySelector('.services-controls .prev');
  const next = document.querySelector('.services-controls .next');

  if (track && prev && next) {
    const slideBy = () => Math.max(track.clientWidth * 0.8, 280); // about one card
    prev.addEventListener('click', () =>
      track.scrollBy({ left: -slideBy(), behavior: 'smooth' })
    );
    next.addEventListener('click', () =>
      track.scrollBy({ left: slideBy(), behavior: 'smooth' })
    );
  }

  /* =========================
     Services: dots (if #servicesDots exists)
  ========================== */
  const dotsBox = document.getElementById('servicesDots');
  if (track && dotsBox) {
    const slides = Array.from(track.querySelectorAll('.service'));
    dotsBox.innerHTML = slides.map(() => '<span class="dot"></span>').join('');
    const dots = Array.from(dotsBox.querySelectorAll('.dot'));

    const setActive = i =>
      dots.forEach((d, idx) => d.classList.toggle('is-active', idx === i));

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        const x =
          slides[i].offsetLeft - (track.clientWidth - slides[i].clientWidth) / 2;
        track.scrollTo({ left: x, behavior: 'smooth' });
      });
    });

    const updateFromScroll = () => {
      const center = track.scrollLeft + track.clientWidth / 2;
      let active = 0;
      let min = Infinity;

      slides.forEach((s, i) => {
        const mid = s.offsetLeft + s.clientWidth / 2;
        const dist = Math.abs(mid - center);
        if (dist < min) {
          min = dist;
          active = i;
        }
      });

      setActive(active);
    };

    track.addEventListener('scroll', () => {
      if (track._ticking) return;
      track._ticking = true;
      requestAnimationFrame(() => {
        updateFromScroll();
        track._ticking = false;
      });
    });

    setActive(0);
  }

  /* =========================
     Stats: count-up on first view
  ========================== */
  const statsSection = document.querySelector('#stats.stats-section');
  if (statsSection) {
    const DURATION_MS = 1200;
    const EASE = t => 1 - Math.pow(1 - t, 3);
    const FORMATTER = new Intl.NumberFormat('en-US');

    // Optional: allow forcing animation even if reduced motion is enabled
    // (Add data-animate to the #stats section if you want that behavior.)
    const force = statsSection.hasAttribute('data-animate');
    const prefersReduced =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches && !force;

    const counters = statsSection.querySelectorAll('.stat-count');

    function animate(el) {
      const target = parseFloat(el.getAttribute('data-target')) || 0;
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';

      if (prefersReduced) {
        el.textContent = prefix + FORMATTER.format(target) + suffix;
        el.dataset.done = '1';
        return;
      }

      const start = performance.now();

      function step(now) {
        const t = Math.min(1, (now - start) / DURATION_MS);
        const eased = EASE(t);
        const value = Math.round(target * eased);
        el.textContent = prefix + FORMATTER.format(value) + suffix;

        if (t < 1) requestAnimationFrame(step);
        else el.dataset.done = '1';
      }

      requestAnimationFrame(step);
    }

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          counters.forEach(el => {
            if (el.dataset.done !== '1') animate(el);
          });

          io.unobserve(entry.target);
        });
      },
      { threshold: 0.25 }
    );

    io.observe(statsSection);
  }

  /* =========================
     Skills: animate mirrored bars on first view
  ========================== */
  const skillsSection = document.querySelector('#skills.skills-section');
  if (skillsSection) {
    const bars = skillsSection.querySelectorAll('.skill .bar');

    function animateBar(bar) {
      const targetPct = bar.style.getPropertyValue('--pct').trim();
      if (!targetPct) return;

      const value = parseFloat(targetPct);
      const start = performance.now();
      const duration = 1200;
      const ease = t => 1 - Math.pow(1 - t, 3);

      function step(now) {
        const t = Math.min(1, (now - start) / duration);
        const eased = ease(t);
        const pctNow = Math.round(value * eased);

        bar.style.setProperty('--fill', pctNow + '%');

        const pctEl = bar.querySelector('.pct');
        if (pctEl) pctEl.textContent = pctNow + '%';

        if (t < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    }

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          bars.forEach(bar => {
            if (!bar.dataset.animated) {
              bar.dataset.animated = '1';
              animateBar(bar);
            }
          });

          io.unobserve(entry.target);
        });
      },
      { threshold: 0.25 }
    );

    io.observe(skillsSection);
  }
});

  /* =========================
     Repo & Org Gallery
  ========================== */
  
