document.addEventListener('DOMContentLoaded', function() {
  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu');
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('open');
  });

  // Simple flip animation for sections
  document.querySelectorAll('.flip').forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 200 * i);
  });
});