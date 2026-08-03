(function () {
  const ok =
    document.body.classList.contains('page-greenfield-projects') ||
    document.body.classList.contains('page-process-development') ||
    document.body.classList.contains('page-consultancy');
  if (!ok) return;

  const nodes = document.querySelectorAll('.svc-v2-reveal');
  if (!nodes.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    nodes.forEach((el) => el.classList.add('is-in'));
    return;
  }

  const hero = document.querySelector('.svc-v2-hero .svc-v2-reveal');
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
