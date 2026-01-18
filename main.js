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
     Expandable Featured Cards: click + keyboard + aria
  ========================== */
  (() => {
    const cards = document.querySelectorAll(".exp-card");
    if (!cards.length) return;

    // Ensure at least one card is active
    if (![...cards].some(c => c.classList.contains("is-active"))) {
      cards[0].classList.add("is-active");
    }

    const setActive = (card) => {
      cards.forEach(c => c.classList.remove("is-active"));
      card.classList.add("is-active");
    };

    cards.forEach(card => {
      // Click to activate
      card.addEventListener("click", () => setActive(card));

      // Make focusable + keyboard supported
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-pressed", card.classList.contains("is-active") ? "true" : "false");

      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setActive(card);
        }
      });
    });

    // Update aria-pressed when active changes
    const observer = new MutationObserver(() => {
      cards.forEach(c =>
        c.setAttribute(
          "aria-pressed",
          c.classList.contains("is-active") ? "true" : "false"
        )
      );
    });

    cards.forEach(c => observer.observe(c, { attributes: true, attributeFilter: ["class"] }));
  })();

  /* =========================
     Expandable Featured Cards: auto-rotate + pause on hover/focus
  ========================== */
  (() => {
    const cards = [...document.querySelectorAll(".exp-card")];
    if (!cards.length) return;

    let i = cards.findIndex(c => c.classList.contains("is-active"));
    if (i < 0) i = 0;

    let paused = false;

    const goNext = () => {
      if (paused) return;
      cards[i].classList.remove("is-active");
      i = (i + 1) % cards.length;
      cards[i].classList.add("is-active");
    };

    setInterval(goNext, 6000);

    // Pause on hover/focus so it doesn't fight the user
    cards.forEach(c => {
      c.addEventListener("mouseenter", () => paused = true);
      c.addEventListener("mouseleave", () => paused = false);
      c.addEventListener("focusin", () => paused = true);
      c.addEventListener("focusout", () => paused = false);
    });
  })();

  /* =========================
     Continuous Scrolling Strips (Projects + Orgs)
     - clones items for seamless loop
     - pauses on hover/focus
  ========================== */
  (() => {
    const tracks = document.querySelectorAll('.marquee__track');
    if (!tracks.length) return;

    tracks.forEach(track => {
      const viewport = track.closest('.marquee__viewport');
      if (!viewport) return;

      // Clone children so it loops seamlessly
      const items = [...track.children];
      if (items.length < 2) return;

      items.forEach(node => track.appendChild(node.cloneNode(true)));

      let x = 0;
      let paused = false;

      // Speed: px per frame-ish (tweak this number)
      const SPEED = 0.55;

      const getLoopWidth = () => {
        // Half of the scrollWidth = original set
        return track.scrollWidth / 2;
      };

      const tick = () => {
        if (!paused) {
          x += SPEED;
          const loopW = getLoopWidth();

          // When we've moved one full set, reset without visual jump
          if (x >= loopW) x = 0;

          track.style.transform = `translateX(${-x}px)`;
        }

        requestAnimationFrame(tick);
      };

      // Pause behavior
      viewport.addEventListener('mouseenter', () => paused = true);
      viewport.addEventListener('mouseleave', () => paused = false);
      viewport.addEventListener('focusin', () => paused = true);
      viewport.addEventListener('focusout', () => paused = false);

      tick();
    });
  })();
