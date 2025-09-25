// Mobile drawer + smooth scroll
document.addEventListener('DOMContentLoaded', () => {
  const mob  = document.getElementById('mobile-nav');
  const btn  = document.getElementById('menu-icon');
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
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      mob?.classList.remove('active');
      btn?.setAttribute('aria-expanded', 'false');
    });
  });
});