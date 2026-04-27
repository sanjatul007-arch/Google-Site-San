// Mobile nav toggle
(function () {
  const toggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-list');
  if (!toggle || !navList) return;

  toggle.addEventListener('click', function () {
    const isOpen = navList.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  // Close nav when a link is clicked (single-page behaviour on mobile)
  navList.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navList.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();
