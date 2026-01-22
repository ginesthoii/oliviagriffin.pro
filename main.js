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


  /* =========================
     Data: Projects + Orgs
     (single source of truth)
  ========================== */

  const PROJECTS = [
    {
      title: "WUSTL Cybersecurity Boot Camp",
      desc: "Structured labs, capstone work, and assessments from an intensive cybersecurity program. Emphasis on blue-team operations, incident response, malware analysis & system hardening.",
      tags: ["security", "training"],
      tech: ["Wireshark", "Kali", "Metasploit", "Bash"],
      href: "https://github.com/ginesthoii/WUSTL-VIRT-CYBER-PT-01-2024-U-LOLC-main",
      img: "images/projects/wustl.jpg"
    },
    {
      title: "WashU Projects",
      desc: "Applied cybersecurity investigations in networking, vulnerability assessment, cloud security, penetration testing & digital forensics.",
      tags: ["security", "cloud"],
      tech: ["Azure", "IAM", "Crypto"],
      href: "https://github.com/ginesthoii/WashU-Projects",
      img: "images/projects/washu-projects.jpg"
    },
    {
      title: "ScenarioEngine",
      desc: "Timeline-based stochastic simulation engine for modeling risk, failure, and long-term outcomes for real-world planning problems.",
      tags: ["python", "systems"],
      tech: ["Python", "Monte Carlo", "Modeling"],
      href: "https://github.com/ginesthoii/ScenarioEngine",
      img: "images/projects/scenarioengine.jpg"
    },
    {
      title: "Mini-Massive",
      desc: "Agent-based simulation framework for modeling emergent system behavior (crowds, traffic, tactical interactions).",
      tags: ["python", "frontend", "systems"],
      tech: ["Python", "WebGL", "Three.js"],
      href: "https://github.com/ginesthoii/Mini-Massive",
      img: "images/projects/mini-massive.jpg"
    },
    {
      title: "metadata-librarian",
      desc: "Local-first archival and metadata extraction system for documents, media, and images.",
      tags: ["python", "automation"],
      tech: ["Python", "YAML", "OCR", "SQLite"],
      href: "https://github.com/ginesthoii/metadata_librarian",
      img: "images/projects/metadata-librarian.jpg"
    },
    {
      title: "smart-tag-system",
      desc: "Universal hierarchical tagging framework for cross-domain organization.",
      tags: ["python", "automation"],
      tech: ["Python", "PyQt6", "SQLite"],
      href: "https://github.com/ginesthoii/smart-tag-system",
      img: "images/projects/smart-tag.jpg"
    },
    {
      title: "framework",
      desc: "Personal operating system for ideas, projects, and research. Templates + automation + consistent structure.",
      tags: ["python", "automation"],
      tech: ["Python", "PyQt6", "SQLite", "Markdown"],
      href: "https://github.com/ginesthoii/framework",
      img: "images/projects/framework.jpg"
    },
    {
      title: "phantom-terminal",
      desc: "Animated self-typing terminal emulator for creating realistic command-line demos. Export PNG/GIF/video.",
      tags: ["frontend", "automation"],
      tech: ["JS", "HTML", "CSS"],
      href: "https://github.com/ginesthoii/phantom-terminal",
      img: "images/projects/phantom-terminal.jpg"
    },
    {
      title: "Notflix",
      desc: "Local Netflix-style streaming demo for learning full-stack + DevSecOps. Zero paid dependencies.",
      tags: ["fullstack", "node", "security"],
      tech: ["Node", "Docker", "React"],
      href: "https://github.com/ginesthoii/Notflix",
      img: "images/projects/notflix.jpg"
    }
  ];

  const ORGS = [
    {
      id: "snakewitch",
      name: "SnakeWitch",
      desc: "Security-minded utilities and caregiver tooling.",
      logo: "images/orgs/snakewitch-logo.svg",
      projects: [
        {
          title: "FeedingCharm",
          desc: "Encrypted caregiver notes with QR access and audit trails.",
          tech: ["Python", "Flask", "Security"],
          href: "https://github.com/ginesthoii"
        }
      ]
    },
    {
      id: "storyshield",
      name: "StoryShield",
      desc: "Private writing tools with threat-modeling baked in.",
      logo: "images/orgs/storyshield-logo.svg",
      projects: [
        {
          title: "QuillLock",
          desc: "Client-side encrypted notes with anonymous sharing links.",
          tech: ["TypeScript", "WebCrypto", "PWA"],
          href: "https://github.com/ginesthoii"
        }
      ]
    }
  ];

  /* =========================
     Helpers
  ========================== */

  const uniq = (arr) => [...new Set(arr)];
  const qs = (sel) => document.querySelector(sel);

  const cardHTML = (p) => `
    <article class="proj-card marquee__item" data-tags="${p.tags.join(" ")}" tabindex="0" role="link">
      <figure class="proj-thumb">
        <img src="${p.img}" alt="${p.title} cover" loading="lazy">
      </figure>
      <div class="proj-body">
        <h3 class="proj-title">${p.title}</h3>
        <p class="proj-blurb">${p.desc}</p>
        <ul class="proj-meta">
          ${p.tech.map(t => `<li>${t}</li>`).join("")}
        </ul>
      </div>
    </article>
  `;

  const gridCardHTML = (p) => `
    <article class="proj-card" data-tags="${p.tags.join(" ")}" tabindex="0" role="link">
      <figure class="proj-thumb">
        <img src="${p.img}" alt="${p.title} cover" loading="lazy">
      </figure>
      <div class="proj-body">
        <h3 class="proj-title">${p.title}</h3>
        <p class="proj-blurb">${p.desc}</p>
        <ul class="proj-meta">
          ${p.tech.map(t => `<li>${t}</li>`).join("")}
        </ul>
      </div>
    </article>
  `;

  const attachLinkBehavior = (container, list) => {
    const cards = [...container.querySelectorAll("[role='link']")];
    cards.forEach((card, idx) => {
      const href = list[idx]?.href;
      if (!href) return;
      card.addEventListener("click", () => window.open(href, "_blank"));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          window.open(href, "_blank");
        }
      });
    });
  };

  /* =========================
     Projects page render + filter
  ========================== */

  const marqueeEl = qs("#projectsMarquee");
  const gridEl = qs("#projectsGrid");
  const filtersEl = qs("#projFilters");

  if (marqueeEl && gridEl && filtersEl) {
    marqueeEl.innerHTML = PROJECTS.map(cardHTML).join("");
    gridEl.innerHTML = PROJECTS.map(gridCardHTML).join("");

    attachLinkBehavior(marqueeEl, PROJECTS);
    attachLinkBehavior(gridEl, PROJECTS);

    const allTags = uniq(PROJECTS.flatMap(p => p.tags));
    const FILTERS = ["*", ...allTags];

    filtersEl.innerHTML = FILTERS.map(f => {
      const label = f === "*" ? "All" : f[0].toUpperCase() + f.slice(1);
      return `<button class="chip ${f === "*" ? "is-active" : ""}" data-filter="${f}">${label}</button>`;
    }).join("");

    const applyFilter = (filter) => {
      const show = (el) => el.style.display = "";
      const hide = (el) => el.style.display = "none";

      [...gridEl.children].forEach(card => {
        const tags = card.getAttribute("data-tags") || "";
        if (filter === "*" || tags.includes(filter)) show(card);
        else hide(card);
      });
    };

    filtersEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      filtersEl.querySelectorAll(".chip").forEach(c => c.classList.remove("is-active"));
      btn.classList.add("is-active");
      applyFilter(btn.dataset.filter);
    });
  }

  /* =========================
     Orgs page render
  ========================== */

  const orgsMarquee = qs("#orgsMarquee");
  const orgSections = qs("#orgSections");

  if (orgsMarquee && orgSections) {
    orgsMarquee.innerHTML = ORGS.map(o => `
      <article class="org-card marquee__item" tabindex="0" role="link" data-org="${o.id}">
        <h3>${o.name}</h3>
        <p>${o.desc}</p>
        <ul class="proj-meta">${o.projects?.[0]?.tech?.slice(0,3).map(t=>`<li>${t}</li>`).join("") || ""}</ul>
      </article>
    `).join("");

    orgSections.innerHTML = ORGS.map(o => `
      <section class="org-section" id="${o.id}">
        <header class="org-header">
          <img src="${o.logo}" class="org-logo" alt="${o.name} logo">
          <div>
            <h2>${o.name}</h2>
            <p class="lead">${o.desc}</p>
          </div>
        </header>

        <div class="org-grid">
          ${o.projects.map(p => `
            <article class="org-card" tabindex="0" role="link" data-href="${p.href}">
              <h3>${p.title}</h3>
              <p>${p.desc}</p>
              <ul class="proj-meta">${p.tech.map(t=>`<li>${t}</li>`).join("")}</ul>
            </article>
          `).join("")}
        </div>
      </section>
    `).join("");

    // org marquee click -> jump to section
    [...orgsMarquee.children].forEach(card => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-org");
        const target = document.getElementById(id);
        target?.scrollIntoView({ behavior: "smooth" });
      });
    });

    // org project click -> open
    orgSections.querySelectorAll("[data-href]").forEach(card => {
      card.addEventListener("click", () => window.open(card.dataset.href, "_blank"));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          window.open(card.dataset.href, "_blank");
        }
      });
    });
  }

  /* =========================
     Continuous marquee loop (seamless)
  ========================== */

  (() => {
    const tracks = document.querySelectorAll('.marquee__track');
    if (!tracks.length) return;

    tracks.forEach(track => {
      const viewport = track.closest('.marquee__viewport');
      if (!viewport) return;

      const items = [...track.children];
      if (items.length < 2) return;

      // Clone to loop
      items.forEach(node => track.appendChild(node.cloneNode(true)));

      let x = 0;
      let paused = false;

      const SPEED = 0.55;

      const getLoopWidth = () => track.scrollWidth / 2;

      const tick = () => {
        if (!paused) {
          x += SPEED;
          const loopW = getLoopWidth();
          if (x >= loopW) x = 0;
          track.style.transform = `translateX(${-x}px)`;
        }
        requestAnimationFrame(tick);
      };

      viewport.addEventListener('mouseenter', () => paused = true);
      viewport.addEventListener('mouseleave', () => paused = false);
      viewport.addEventListener('focusin', () => paused = true);
      viewport.addEventListener('focusout', () => paused = false);

      tick();
    });
  })();










gsap.registerPlugin(ScrollTrigger);

// gentle fade in (icons only)
gsap.to(".card-icon", { opacity: 1, delay: 0.1 });

let iteration = 0;

const spacing = 0.1,
  snap = gsap.utils.snap(spacing),
  cards = gsap.utils.toArray(".cards li"),
  seamlessLoop = buildSeamlessLoop(cards, spacing),
  scrub = gsap.to(seamlessLoop, {
    totalTime: 0,
    duration: 0.5,
    ease: "power3",
    paused: true
  }),
  trigger = ScrollTrigger.create({
    start: 0,
    onUpdate(self) {
      if (self.progress === 1 && self.direction > 0 && !self.wrapping) {
        wrapForward(self);
      } else if (self.progress < 1e-5 && self.direction < 0 && !self.wrapping) {
        wrapBackward(self);
      } else {
        scrub.vars.totalTime = snap((iteration + self.progress) * seamlessLoop.duration());
        scrub.invalidate().restart();
        self.wrapping = false;
      }
    },
    end: "+=3000",
    pin: ".gallery"
  });

function wrapForward(trigger) {
  iteration++;
  trigger.wrapping = true;
  trigger.scroll(trigger.start + 1);
}

function wrapBackward(trigger) {
  iteration--;
  if (iteration < 0) {
    iteration = 9;
    seamlessLoop.totalTime(seamlessLoop.totalTime() + seamlessLoop.duration() * 10);
    scrub.pause();
  }
  trigger.wrapping = true;
  trigger.scroll(trigger.end - 1);
}

function scrubTo(totalTime) {
  let progress = (totalTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration();
  if (progress > 1) {
    wrapForward(trigger);
  } else if (progress < 0) {
    wrapBackward(trigger);
  } else {
    trigger.scroll(trigger.start + progress * (trigger.end - trigger.start));
  }
}

document.querySelector(".next").addEventListener("click", () => scrubTo(scrub.vars.totalTime + spacing));
document.querySelector(".prev").addEventListener("click", () => scrubTo(scrub.vars.totalTime - spacing));

function buildSeamlessLoop(items, spacing) {
  let overlap = Math.ceil(1 / spacing),
    startTime = items.length * spacing + 0.5,
    loopTime = (items.length + overlap) * spacing + 1,
    rawSequence = gsap.timeline({ paused: true }),
    seamlessLoop = gsap.timeline({
      paused: true,
      repeat: -1,
      onRepeat() {
        this._time === this._dur && (this._tTime += this._dur - 0.01);
      }
    }),
    l = items.length + overlap * 2,
    time = 0,
    i, index, item;

  gsap.set(items, { xPercent: 400, opacity: 0, scale: 0 });

  for (i = 0; i < l; i++) {
    index = i % items.length;
    item = items[index];
    time = i * spacing;

    rawSequence
      .fromTo(
        item,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          zIndex: 100,
          duration: 0.5,
          yoyo: true,
          repeat: 1,
          ease: "power1.in",
          immediateRender: false
        },
        time
      )
      .fromTo(
        item,
        { xPercent: 400 },
        { xPercent: -400, duration: 1, ease: "none", immediateRender: false },
        time
      );

    i <= items.length && seamlessLoop.add("label" + i, time);
  }

  rawSequence.time(startTime);

  seamlessLoop
    .to(rawSequence, {
      time: loopTime,
      duration: loopTime - startTime,
      ease: "none"
    })
    .fromTo(
      rawSequence,
      { time: overlap * spacing + 1 },
      {
        time: startTime,
        duration: startTime - (overlap * spacing + 1),
        immediateRender: false,
        ease: "none"
      }
    );

  return seamlessLoop;
}
