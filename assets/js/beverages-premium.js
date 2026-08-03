(function () {
  if (!document.body.classList.contains('page-beverages-mineral-water')) return;

  const nodes = document.querySelectorAll('.bwm-v2-reveal');
  if (nodes.length) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((el) => el.classList.add('is-in'));
    } else {
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
    }
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;

  // Premium banner parallax (mouse)
  const heroFrame = document.querySelector('.bwm-v2-hero__frame');
  const heroBg = document.querySelector('.bwm-v2-hero__bg');
  if (heroFrame && heroBg) {
    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;

    const tick = () => {
      curX += (targetX - curX) * 0.08;
      curY += (targetY - curY) * 0.08;
      heroBg.style.setProperty('--px', `${curX.toFixed(2)}px`);
      heroBg.style.setProperty('--py', `${curY.toFixed(2)}px`);
      raf = requestAnimationFrame(tick);
    };

    heroFrame.addEventListener('mousemove', (e) => {
      const rect = heroFrame.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 22;
      targetY = y * 14;
      if (!raf) raf = requestAnimationFrame(tick);
    });

    heroFrame.addEventListener('mouseleave', () => {
      targetX = 0;
      targetY = 0;
    });
  }

  // 3D interactive images on service cards only
  document.querySelectorAll('.bwm-v2-svc').forEach((card) => {
    const media = card.querySelector('.bwm-v2-svc__media');
    const img = media && media.querySelector('img');
    if (!media || !img) return;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rotY = x * 16;
      const rotX = -y * 12;
      const tx = x * 10;
      const ty = y * 8;

      card.classList.add('is-tilting');
      media.style.setProperty('--shine-x', `${(x + 0.5) * 100}%`);
      media.style.setProperty('--shine-y', `${(y + 0.5) * 100}%`);
      img.style.transform =
        `perspective(700px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.14) translate3d(${tx}px, ${ty}px, 18px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.classList.remove('is-tilting');
      media.style.setProperty('--shine-x', '50%');
      media.style.setProperty('--shine-y', '40%');
      img.style.transform = '';
    });
  });
})();
