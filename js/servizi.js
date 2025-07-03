document.addEventListener('DOMContentLoaded', function() {
  /************************************************
    1) TOGGLE MENU (Hamburger / Overlay)
  ************************************************/
  const toggle = document.querySelector('.nav-toggle');
  const menuOverlay = document.querySelector('.nav-menu-overlay');
  const nav = document.querySelector('.custom-nav');

  toggle.addEventListener('click', function() {
    menuOverlay.classList.toggle('active');
    toggle.classList.toggle('open');
  });

  document.querySelectorAll('.nav-menu-overlay .nav-link').forEach(item => {
    item.addEventListener('click', () => {
      menuOverlay.classList.remove('active');
      toggle.classList.remove('open');
    });
  });

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  /************************************************
    2) CAROUSEL SERVIZI – SCROLL CON FRECCE
  ************************************************/
  const carousel = document.querySelector('.services-carousel');
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');

  const scrollAmount = () => Math.floor(carousel.clientWidth * 0.9);

  arrowLeft.addEventListener('click', () => {
    carousel.scrollBy({
      left: -scrollAmount(),
      behavior: 'smooth'
    });
  });

  arrowRight.addEventListener('click', () => {
    carousel.scrollBy({
      left: scrollAmount(),
      behavior: 'smooth'
    });
  });

  const toggleArrows = () => {
    if (carousel.scrollLeft <= 0) {
      arrowLeft.setAttribute('disabled', 'disabled');
    } else {
      arrowLeft.removeAttribute('disabled');
    }
    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 5) {
      arrowRight.setAttribute('disabled', 'disabled');
    } else {
      arrowRight.removeAttribute('disabled');
    }
  };

  arrowLeft.setAttribute('disabled', 'disabled');
  arrowRight.removeAttribute('disabled');
  carousel.addEventListener('scroll', toggleArrows);
  window.addEventListener('resize', toggleArrows);

  toggleArrows();
});