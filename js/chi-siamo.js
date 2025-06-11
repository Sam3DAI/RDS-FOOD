document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.nav-toggle');
    const menuOverlay = document.querySelector('.nav-menu-overlay');
    const nav = document.querySelector('.custom-nav');

    // Apertura / chiusura overlay menu
    toggle.addEventListener('click', function() {
      menuOverlay.classList.toggle('active');
      toggle.classList.toggle('open');
    });

    // Chiudo overlay se clicco su una voce
    document.querySelectorAll('.nav-menu-overlay .nav-link').forEach(item => {
      item.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        toggle.classList.remove('open');
      });
    });

    // Cambio background-header al superamento di 50px di scroll
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  });