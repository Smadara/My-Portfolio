document.addEventListener('DOMContentLoaded', function () {
  
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  (function(){
    const links = document.querySelectorAll('.nb-links a');
    const sections = [...links].map(a => document.querySelector(a.getAttribute('href')));
  
    function onScroll(){
      const y = window.scrollY + 140;
      let current = 0;
      sections.forEach((s, i) => { if(s && s.offsetTop <= y) current = i; });
      links.forEach((a, i) => a.classList.toggle('active', i === current));
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
  })();
  
  /* ===== Mobile menu ===== */
  (function(){
    const burger = document.getElementById('nbBurger');
    const menu = document.getElementById('nbLinks');
    if(!burger) return;
    burger.addEventListener('click', () => menu.classList.toggle('open'));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
  })();
  
  var toggleButtons = document.querySelectorAll('.toggle-btn');
  var projectCards = document.querySelectorAll('.project-card');

  toggleButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = this.getAttribute('data-filter');

      toggleButtons.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');

      projectCards.forEach(function (card) {
        if (card.getAttribute('data-category') === filter) {
          card.hidden = false;
        } else {
          card.hidden = true;
        }
      });
    });
  });
});