/* ============================================================
   SCRIBBLE STREET — interactions
   ============================================================ */
(function () {
  'use strict';

  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');

  /* ---- Sticky header style on scroll ---- */
  const onScroll = () => {
    if (window.scrollY > 30) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const open = header.classList.toggle('menu-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    header.querySelectorAll('.main-nav a').forEach((a) =>
      a.addEventListener('click', () => {
        header.classList.remove('menu-open');
        navToggle.setAttribute('aria-expanded', 'false');
      })
    );
  }

  /* ---- Scroll reveal ---- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('in-view'));
  }

  /* ---- Active nav link via section in view ---- */
  const navLinks = Array.from(document.querySelectorAll('.main-nav .nav-link'));
  const sections = navLinks
    .map((l) => document.querySelector(l.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = '#' + e.target.id;
            navLinks.forEach((l) =>
              l.classList.toggle('is-active', l.getAttribute('href') === id)
            );
          }
        });
      },
      { threshold: 0.4, rootMargin: '-30% 0px -50% 0px' }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ---- Subtle parallax on hero collage ---- */
  const collage = document.querySelector('.hero-collage');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (collage && !reduce && window.matchMedia('(pointer:fine)').matches) {
    const layers = collage.querySelectorAll('.paper, .note, .scribble-lime-1');
    collage.addEventListener('mousemove', (ev) => {
      const r = collage.getBoundingClientRect();
      const x = (ev.clientX - r.left) / r.width - 0.5;
      const y = (ev.clientY - r.top) / r.height - 0.5;
      layers.forEach((el, i) => {
        const depth = (i + 1) * 2.4;
        el.style.setProperty('--px', (x * depth).toFixed(1) + 'px');
        el.style.setProperty('--py', (y * depth).toFixed(1) + 'px');
      });
    });
    collage.addEventListener('mouseleave', () => {
      layers.forEach((el) => {
        el.style.setProperty('--px', '0px');
        el.style.setProperty('--py', '0px');
      });
    });
  }
})();
