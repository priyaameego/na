(function () {
  if (!document.body.classList.contains('page-beverages-mineral-water')) return;

  const nodes = document.querySelectorAll('.bwm-v2-reveal');
  if (!nodes.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    nodes.forEach((el) => el.classList.add('is-in'));
    return;
  }

  // Hero content should appear immediately for a polished first paint.
  const hero = document.querySelector('.bwm-v2-hero .bwm-v2-reveal');
  if (hero) hero.classList.add('is-in');

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
  );

  nodes.forEach((el) => {
    if (el.classList.contains('is-in')) return;
    io.observe(el);
  });
})();
