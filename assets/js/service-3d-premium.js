(function () {
  const body = document.body;
  const isServicePage =
    body.classList.contains('page-beverages-mineral-water') ||
    body.classList.contains('page-etp-solutions') ||
    body.classList.contains('page-greenfield-projects') ||
    body.classList.contains('page-process-development') ||
    body.classList.contains('page-consultancy') ||
    body.classList.contains('page-other-services') ||
    body.classList.contains('page-careers');

  if (!isServicePage) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;

  function bindHeroParallax(frameSel, bgSel) {
    const frame = document.querySelector(frameSel);
    const bg = document.querySelector(bgSel);
    if (!frame || !bg) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;

    const tick = () => {
      curX += (targetX - curX) * 0.08;
      curY += (targetY - curY) * 0.08;
      bg.style.setProperty('--px', `${curX.toFixed(2)}px`);
      bg.style.setProperty('--py', `${curY.toFixed(2)}px`);
      raf = requestAnimationFrame(tick);
    };

    frame.addEventListener('mousemove', (e) => {
      const rect = frame.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 22;
      targetY = y * 14;
      if (!raf) raf = requestAnimationFrame(tick);
    });

    frame.addEventListener('mouseleave', () => {
      targetX = 0;
      targetY = 0;
    });
  }

  function bindImageTilt(root, imgSel) {
    const img = root.querySelector(imgSel);
    if (!img) return;

    root.addEventListener('mousemove', (e) => {
      const rect = root.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      root.classList.add('is-tilting');
      root.style.setProperty('--shine-x', `${(x + 0.5) * 100}%`);
      root.style.setProperty('--shine-y', `${(y + 0.5) * 100}%`);
      img.style.transform =
        `perspective(700px) rotateX(${-y * 12}deg) rotateY(${x * 16}deg) scale(1.14) translate3d(${x * 10}px, ${y * 8}px, 18px)`;
    });

    root.addEventListener('mouseleave', () => {
      root.classList.remove('is-tilting');
      img.style.transform = '';
    });
  }

  function bindCardTilt(card, mediaSel, imgSel) {
    const media = card.querySelector(mediaSel);
    const img = media && media.querySelector(imgSel);
    if (!media || !img) {
      // text-only card — light whole-card tilt
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform =
          `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
      return;
    }

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.classList.add('is-tilting');
      media.style.setProperty('--shine-x', `${(x + 0.5) * 100}%`);
      media.style.setProperty('--shine-y', `${(y + 0.5) * 100}%`);
      card.style.transform =
        `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) translateY(-8px)`;
      img.style.transform =
        `perspective(700px) rotateX(${-y * 10}deg) rotateY(${x * 14}deg) scale(1.14) translate3d(${x * 8}px, ${y * 6}px, 16px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.classList.remove('is-tilting');
      card.style.transform = '';
      img.style.transform = '';
    });
  }

  // Heroes
  bindHeroParallax('.etp-v2-hero__frame', '.etp-v2-hero__bg');
  bindHeroParallax('.svc-v2-hero__frame', '.svc-v2-hero__bg');
  bindHeroParallax('.ph-banner', '.ph-banner__media');

  // Service cards
  document.querySelectorAll('.etp-v2-svc').forEach((card) => {
    bindCardTilt(card, '.etp-v2-svc__media', 'img');
  });
  document.querySelectorAll('.svc-v2-svc').forEach((card) => {
    bindCardTilt(card, '.svc-v2-svc__media', 'img');
  });

  // Hub cards — enhance image inside existing card-3d
  document.querySelectorAll('body.page-other-services .eb-prod.card-3d').forEach((card) => {
    const img = card.querySelector('img');
    if (!img) return;
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.classList.add('is-tilting');
      img.style.transform = `scale(1.12) translate3d(${x * 12}px, ${y * 10}px, 0)`;
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('is-tilting');
      img.style.transform = '';
    });
  });

  // Gallery + what visuals
  document
    .querySelectorAll(
      '.etp-v2-gallery__item, .svc-v2-gallery__item, .bwm-v2-gallery__item, .etp-v2-what__visual, .svc-v2-what__visual, .bwm-v2-what__visual'
    )
    .forEach((el) => bindImageTilt(el, 'img'));
})();
