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