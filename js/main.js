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
