/* Nayara — Homepage Luxury Enterprise UI (index.html only) */

(function () {
  'use strict';

  if (!document.body.classList.contains('page-home')) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initHeroTextReveal() {
    const hero = document.getElementById('hero-swiper');
    if (!hero || typeof gsap === 'undefined') return;

    hero.querySelectorAll('.sp-hero-copy .sp-eyebrow, .sp-hero-copy .sp-hero-title, .sp-hero-copy .sp-hero-lead, .sp-hero-copy .sp-hero-actions').forEach((el) => {
      el.classList.add('home-hero-text-item');
    });

    function revealPanel(panel) {
      if (!panel || reducedMotion) return;
      const items = panel.querySelectorAll('.home-hero-text-item');
      gsap.fromTo(items,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.09, ease: 'power3.out' }
      );
      const stats = panel.querySelector('.sp-hero-stats');
      if (stats) {
        gsap.fromTo(stats,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, delay: 0.45, ease: 'power2.out' }
        );
      }
    }

    const active = hero.querySelector('.hero-slide-panel.is-active');
    if (active) revealPanel(active);

    hero.addEventListener('hero:slidechange', (e) => {
      const idx = e.detail?.index ?? 0;
      const panel = hero.querySelectorAll('.hero-slide-panel')[idx];
      revealPanel(panel);
    });
  }

  function initHeroKenBurns() {
    const hero = document.getElementById('hero-swiper');
    if (!hero) return;

    /* CSS Ken Burns handles active slides; mark init so premium.js does not fight it */
    hero.querySelectorAll('.hero-slide-bg').forEach((bg) => {
      bg.dataset.homeKen = '1';
      bg.dataset.kenBurnsInit = '1';
    });

    if (reducedMotion) {
      hero.querySelectorAll('.hero-slide-bg').forEach((bg) => {
        bg.style.animation = 'none';
        bg.style.transform = 'scale(1.08)';
      });
    }
  }

  function initHeroScrollParallax() {
    if (reducedMotion || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    const hero = document.getElementById('hero-swiper');
    if (!hero) return;

    hero.querySelectorAll('.sp-hero-copy').forEach((el) => {
      gsap.to(el, {
        y: -24,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    });
  }

  function initProductsGridReveal() {
    const grid = document.getElementById('home-products-grid');
    if (!grid) return;

    const cards = grid.querySelectorAll('.hp-prod-card');
    if (!cards.length) return;

    if (reducedMotion || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      cards.forEach((card) => card.classList.add('is-revealed'));
      return;
    }

    gsap.set(cards, { opacity: 0, y: 48, rotateX: 10, scale: 0.92, transformPerspective: 1200 });

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      duration: 0.65,
      stagger: 0.07,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: grid,
        start: 'top 84%',
        toggleActions: 'play none none none',
      },
      onComplete: function () {
        const card = this.targets()[0];
        card.classList.add('is-revealed');
        gsap.set(card, { clearProps: 'opacity,transform' });
      },
    });
  }

  function initSectionReveals() {
    if (reducedMotion || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.utils.toArray('.page-home .eb-head, .page-home .eb-cell--editorial').forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 36 },
        {
          opacity: 1, y: 0, duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        }
      );
    });

    /* About image — always visible, subtle slide only */
    const aboutStage = document.querySelector('.page-home .eb-about-stage');
    if (aboutStage) {
      gsap.fromTo(aboutStage,
        { opacity: 1, x: -20 },
        {
          opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: aboutStage, start: 'top 90%', toggleActions: 'play none none none' },
        }
      );
    }

    gsap.utils.toArray('.page-home #about .eb-cell').forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.65, delay: i * 0.04, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 94%', toggleActions: 'play none none none' },
        }
      );
    });
  }

  function initAboutListReveal() {
    if (reducedMotion || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    const list = document.querySelector('.page-home .eb-cell--mission .eb-cell-list');
    if (!list) return;

    gsap.fromTo(list.querySelectorAll('li'),
      { opacity: 0, x: -16 },
      {
        opacity: 1, x: 0, duration: 0.55, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: list, start: 'top 85%', toggleActions: 'play none none none' },
      }
    );
  }

  function initWhySection() {
    const section = document.querySelector('.page-home .hp-why');
    if (!section) return;

    const intro = section.querySelector('.hp-why__intro');
    const items = section.querySelectorAll('.hp-why-item');

    if (reducedMotion || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      section.querySelectorAll('.hp-why-reveal').forEach((el) => el.classList.add('is-visible'));
      return;
    }

    if (intro) {
      gsap.fromTo(intro,
        { opacity: 0, x: -48, rotateY: 6 },
        {
          opacity: 1, x: 0, rotateY: 0, duration: 0.95, ease: 'power3.out',
          scrollTrigger: { trigger: intro, start: 'top 82%', toggleActions: 'play none none none' },
          onComplete: () => intro.classList.add('is-visible'),
        }
      );
    }

    if (items.length) {
      gsap.fromTo(items,
        { opacity: 0, x: 40, clipPath: 'inset(0 100% 0 0)' },
        {
          opacity: 1,
          x: 0,
          clipPath: 'inset(0 0% 0 0)',
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section.querySelector('.hp-why__features'),
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
          onComplete: function () {
            this.targets()[0].classList.add('is-visible');
          },
        }
      );
    }

    const cta = section.querySelector('.hp-why__cta');
    if (cta) {
      cta.addEventListener('mouseenter', () => {
        gsap.to(cta, { scale: 1.03, duration: 0.25, ease: 'power2.out' });
      });
      cta.addEventListener('mouseleave', () => {
        gsap.to(cta, { scale: 1, duration: 0.3, ease: 'power2.out' });
      });
    }
  }

  function initCertReveal() {
    if (reducedMotion || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    const gallery = document.querySelector('.page-home .eb-cert-gallery');
    if (!gallery) return;

    gsap.fromTo(gallery,
      { opacity: 0, y: 24 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: gallery, start: 'top 88%', toggleActions: 'play none none none' },
      }
    );
  }

  function initCorporateIntro() {
    const section = document.querySelector('.page-home .hp-corporate');
    if (!section || reducedMotion || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      section?.querySelectorAll('.hp-corporate__cert').forEach((c) => c.classList.add('is-visible'));
      return;
    }

    const visual = section.querySelector('.hp-corporate__visual');
    const content = section.querySelector('.hp-corporate__content');
    const stats = section.querySelector('.hp-corporate__stats');
    const figure = section.querySelector('.hp-corporate__figure');
    const certs = section.querySelectorAll('.hp-corporate__cert');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 78%',
        toggleActions: 'play none none none',
      },
    });

    if (stats) {
      tl.fromTo(stats,
        { opacity: 0, y: 28, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.75, ease: 'power3.out' }
      );
    }

    if (figure) {
      tl.fromTo(figure,
        { opacity: 0, y: 32, rotateY: -8 },
        { opacity: 1, y: 0, rotateY: 0, duration: 0.85, ease: 'power3.out' },
        '-=0.4'
      );
    }

    if (content) {
      const items = content.querySelectorAll('.hp-corporate__eyebrow, .hp-corporate__title, .hp-corporate__lead, .hp-corporate__cta, .hp-corporate__certs-label');
      tl.fromTo(items,
        { opacity: 0, x: 32 },
        { opacity: 1, x: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out' },
        '-=0.55'
      );
    }

    if (certs.length) {
      tl.fromTo(certs,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out',
          onComplete: () => certs.forEach((c) => c.classList.add('is-visible')),
        },
        '-=0.15'
      );
    }

    section.querySelectorAll('.hp-corporate__orb').forEach((orb, i) => {
      gsap.to(orb, {
        y: (i + 1) * -20,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    });
  }

  function initCtaReveal() {
    if (reducedMotion || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    const cta = document.querySelector('.page-home .eb-cta-glass');
    if (!cta) return;

    gsap.fromTo(cta.children,
      { opacity: 0, y: 32 },
      {
        opacity: 1, y: 0, duration: 0.75, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: cta, start: 'top 85%', toggleActions: 'play none none none' },
      }
    );
  }

  function boot() {
    initHeroKenBurns();
    initHeroTextReveal();
    initHeroScrollParallax();
    initProductsGridReveal();
    initCorporateIntro();
    initSectionReveals();
    initAboutListReveal();
    initWhySection();
    initCertReveal();
    initCtaReveal();
    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  window.addEventListener('load', () => {
    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
  });
})();
