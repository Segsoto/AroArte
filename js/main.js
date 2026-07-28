// Animación básica de anillo según scroll
(function() {
  const ring = document.querySelector('.ring-hero');
  if (!ring) return;

  function onScrollRing() {
    const scrollY = window.scrollY;
    const max = 400;
    const progress = Math.max(0, Math.min(scrollY / max, 1));
    const rotation = progress * 360;
    const translateY = progress * 40;
    ring.style.transform = `translateY(${translateY}px) rotate(${rotation}deg)`;
  }

  window.addEventListener('scroll', onScrollRing);
  onScrollRing();
})();
// Menú hamburguer tipo overlay profesional
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (!toggle || !mobileMenu) return;

  function openMenu() {
    mobileMenu.style.display = 'block';
    mobileMenu.classList.add('is-open');
    document.body.style.overflow = 'hidden'; // bloquea scroll detrás
  }

  function closeMenu() {
    mobileMenu.style.display = 'none';
    mobileMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.contains('is-open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Cerrar al hacer clic en cualquier link del menú
  mobileMenu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      closeMenu();
    }
  });
})();