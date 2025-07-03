document.addEventListener('DOMContentLoaded', function(){
  // menu toggle + scroll background
  const toggle = document.querySelector('.nav-toggle');
  const overlay = document.querySelector('.nav-menu-overlay');
  const nav = document.querySelector('nav.custom-nav');
  toggle.addEventListener('click', ()=>{
    overlay.classList.toggle('active');
    toggle.classList.toggle('open');
  });
  overlay.querySelectorAll('.nav-link').forEach(a=>{
    a.addEventListener('click', ()=>{
      overlay.classList.remove('active');
      toggle.classList.remove('open');
    });
  });
  window.addEventListener('scroll', ()=>{
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  // slider "Chi è RDS FOOD"
  const carousel = document.querySelector('.valori-carousel');
  const prev = document.querySelector('.chi-prev');
  const next = document.querySelector('.chi-next');
  if(carousel){
    const card = carousel.querySelector('.valore-card');
    const gap = parseInt(getComputedStyle(carousel).gap)||20;
    const step = card.offsetWidth + gap;
    prev.addEventListener('click', ()=> carousel.scrollBy({ left:-step, behavior:'smooth' }));
    next.addEventListener('click', ()=> carousel.scrollBy({ left: step, behavior:'smooth' }));
  }
});