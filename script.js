/* ══════════════════════════════════════════
   script.js – Interaktivität & Animationen
   ══════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Navbar: Scroll-Effekt & aktiver Link ──────── */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id], header[id]');

  function onScroll() {
    // Navbar-Hintergrund bei Scroll
    navbar.classList.toggle('scrolled', window.scrollY > 40);

    // Aktiven Link markieren
    let current = '';
    sections.forEach(function (section) {
      var top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Mobile Nav Toggle ─────────────────── */
  var navToggle = document.getElementById('navToggle');
  var navMenu = document.getElementById('navLinks');

  navToggle.addEventListener('click', function () {
    navMenu.classList.toggle('open');
  });

  // Menü schließen bei Klick auf Link
  navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navMenu.classList.remove('open');
    });
  });

  /* ── Smooth Scroll für Anker-Links ──────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Typewriter-Effekt ──────────────────── */
  var typewriterEl = document.getElementById('typewriter');
  var words = [
    'Künstliche Intelligenz',
    'Multiplayer-Adventure-Game',
    'AEVO-Ausbildung',
    'Connector-Architektur',
    'Reallife-Geo-Game'
  ];
  var wordIndex = 0;
  var charIndex = 0;
  var isDeleting = false;
  var typeSpeed = 60;
  var deleteSpeed = 35;
  var pauseEnd = 2000;
  var pauseStart = 400;

  function type() {
    var current = words[wordIndex];
    if (isDeleting) {
      typewriterEl.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterEl.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    var delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === current.length) {
      delay = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = pauseStart;
    }

    setTimeout(type, delay);
  }

  type();

  /* ── Timeline Scroll-Animation ──────────── */
  var timelineItems = document.querySelectorAll('.timeline-item');

  function checkTimeline() {
    timelineItems.forEach(function (item) {
      var rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        item.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkTimeline, { passive: true });
  window.addEventListener('resize', checkTimeline, { passive: true });
  checkTimeline();

  /* ── Scroll-Indicator ausblenden ─────────── */
  var scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    window.addEventListener('scroll', function () {
      scrollIndicator.style.opacity = window.scrollY > 100 ? '0' : '1';
    }, { passive: true });
  }
})();
