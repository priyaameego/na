/* Nayara — Premium Experience: Lenis + GSAP + 3D */

(function () {
  'use strict';

  let lenis = null;

  function initLenis() {
    if (typeof Lenis === 'undefined') return;
    lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
      gsap.registerPlugin(ScrollTrigger);
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }
  }

  function initGSAPScroll() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.utils.toArray('.gs-reveal').forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        }
      );
    });

    gsap.utils.toArray('.gs-reveal-left').forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, x: -80 },
        {
          opacity: 1, x: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
        }
      );
    });

    gsap.utils.toArray('.gs-reveal-right').forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, x: 80 },
        {
          opacity: 1, x: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
        }
      );
    });

    gsap.utils.toArray('.gs-scale').forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.4)',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
        }
      );
    });

    gsap.utils.toArray('.gs-blur').forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, filter: 'blur(16px)', y: 50 },
        {
          opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.3, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
        }
      );
    });

    gsap.utils.toArray('.section-premium').forEach((section) => {
      gsap.to(section.querySelector('.parallax-bg'), {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 1.2 },
      });
    });
  }

  function init3DCards() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.querySelectorAll('.card-3d').forEach((card) => {
      if (card.closest('.page-home')) return;
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(1000px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateZ(10px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) translateZ(0)';
        card.style.transition = 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
      });
      card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.1s ease-out';
      });
    });
  }

  function init3DMouseParallax() {
    const scene = document.querySelector('.scene-3d');
    if (!scene) return;
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      scene.querySelectorAll('[data-depth]').forEach((el) => {
        const depth = parseFloat(el.dataset.depth) || 20;
        el.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`;
      });
    });
  }

  function initHero3DCanvas() {
    const canvas = document.getElementById('hero-3d-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, particles = [];

    function resize() {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    }

    function initParticles() {
      particles = Array.from({ length: 60 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random(),
        r: 1 + Math.random() * 2,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        const alpha = 0.15 + p.z * 0.4;
        const size = p.r * (0.5 + p.z);
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 169, 110, ${alpha * 0.6})`;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }

    resize();
    initParticles();
    draw();
    window.addEventListener('resize', () => { resize(); initParticles(); });
  }

  function initPageHero3D() {
    document.querySelectorAll('.page-hero-3d-canvas').forEach((canvas) => {
      if (canvas.dataset.init) return;
      canvas.dataset.init = '1';
      const ctx = canvas.getContext('2d');
      const parent = canvas.parentElement;
      let w, h;

      function resize() {
        w = canvas.width = parent.offsetWidth;
        h = canvas.height = parent.offsetHeight;
      }
      resize();

      let t = 0;
      function draw() {
        t += 0.003;
        const bg = ctx.createLinearGradient(0, 0, w, h * 1.2);
        bg.addColorStop(0, '#0B1F3A');
        bg.addColorStop(0.35, '#16304F');
        bg.addColorStop(0.7, '#0F172A');
        bg.addColorStop(1, '#0B1F3A');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, w, h);

        for (let i = 0; i < 5; i++) {
          const cx = w * (0.1 + i * 0.18) + Math.sin(t * 0.7 + i * 1.4) * 24;
          const cy = h * (0.45 + (i % 2) * 0.15) + Math.cos(t * 0.5 + i) * 18;
          const r = 70 + i * 30;
          const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
          const goldAlpha = 0.06 + Math.sin(t * 0.8 + i) * 0.02;
          grad.addColorStop(0, `rgba(201, 169, 110, ${goldAlpha})`);
          grad.addColorStop(0.5, `rgba(22, 48, 79, ${goldAlpha * 0.6})`);
          grad.addColorStop(1, 'transparent');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, w, h);
        }

        for (let p = 0; p < 12; p++) {
          const px = (w * ((p * 0.11 + t * 0.015) % 1));
          const py = h * (0.25 + Math.sin(t * 1.1 + p * 0.7) * 0.25);
          ctx.beginPath();
          ctx.arc(px, py, 1 + (p % 3) * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(201, 169, 110, ${0.1 + (p % 4) * 0.05})`;
          ctx.fill();
        }

        requestAnimationFrame(draw);
      }
      draw();
      window.addEventListener('resize', resize);
    });

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      document.querySelectorAll('.page-hero-3d-photo').forEach((photo) => {
        const hero = photo.closest('.page-hero-3d');
        if (!hero) return;
        gsap.to(photo, {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 1.2 },
        });
      });
    }
  }

  function initImagePremium() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.utils.toArray('.premium-img-wrap, .img-reveal').forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        }
      );
    });
  }

  function initCmsStagger() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    document.querySelectorAll('.cms-content-premium').forEach((block) => {
      const items = block.querySelectorAll(':scope > h2, :scope > h3, :scope > p, :scope > ul');
      if (!items.length) return;
      gsap.fromTo(items,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out',
          scrollTrigger: { trigger: block, start: 'top 82%', toggleActions: 'play none none none' },
        }
      );
    });
  }

  function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    const update = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
    };
    if (lenis) lenis.on('scroll', update);
    else window.addEventListener('scroll', update, { passive: true });
  }

  function initHeaderLuxury() {
    const header = document.getElementById('main-header');
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle('lux-compact', window.scrollY > 60);
    };
    onScroll();
    if (lenis) lenis.on('scroll', onScroll);
    else window.addEventListener('scroll', onScroll, { passive: true });
  }

  function initFloatingDecor() {
    /* Spatial UI uses section-local depth — no global floating layer */
  }

  function initHeroCinematic() {
    if (document.body.classList.contains('page-home')) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const hero = document.getElementById('hero-swiper');
    if (!hero || hero.dataset.cinematicInit) return;
    hero.dataset.cinematicInit = '1';

    if (!hero.querySelector('.hero-atmosphere')) {
      const atmosphere = document.createElement('div');
      atmosphere.className = 'hero-atmosphere hero-atmosphere--particles';
      atmosphere.setAttribute('aria-hidden', 'true');
      hero.appendChild(atmosphere);
    }

    if (typeof gsap !== 'undefined') {
      hero.querySelectorAll('.hero-slide-bg').forEach((bg) => {
        if (bg.dataset.kenBurnsInit) return;
        bg.dataset.kenBurnsInit = '1';
        gsap.fromTo(bg,
          { backgroundPosition: '50% 50%', backgroundSize: '108%' },
          {
            backgroundPosition: '54% 46%',
            backgroundSize: '118%',
            duration: 22,
            ease: 'none',
            repeat: -1,
            yoyo: true,
          }
        );
      });

      hero.querySelectorAll('.sp-hero-copy, .sp-glass-panel').forEach((panel) => {
        gsap.fromTo(panel,
          { y: 0 },
          {
            y: -18,
            ease: 'none',
            scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 1.2 },
          }
        );
      });
    }
  }

  function initHeroLuxury() {
    const hero = document.getElementById('hero-swiper');
    if (!hero || hero.dataset.luxInit) return;
    hero.dataset.luxInit = '1';

    if (!hero.querySelector('.hero-luxury-rays') && !hero.classList.contains('sp-hero')) {
      const rays = document.createElement('div');
      rays.className = 'hero-luxury-rays';
      rays.setAttribute('aria-hidden', 'true');
      hero.appendChild(rays);
    }

    if (!hero.querySelector('.sp-scroll-indicator') && !hero.querySelector('.hero-scroll-hint')) {
      const hint = document.createElement('div');
      hint.className = 'hero-scroll-hint';
      hint.setAttribute('aria-hidden', 'true');
      hint.innerHTML = 'Scroll<span></span>';
      hero.appendChild(hint);
    }

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      hero.querySelectorAll('.hero-slide-bg').forEach((bg) => {
        if (bg.dataset.parallaxInit) return;
        bg.dataset.parallaxInit = '1';
        gsap.to(bg, {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 1.5 },
        });
      });
    }

    initHeroCinematic();
  }

  function initLuxuryButtons() {
    const selectors = '.btn-primary, .btn-gold, .lg-btn-cta, .magnetic-btn, .pf-cta-btn, .sp-btn--primary, .sp-btn.sp-btn--primary, .bwm-btn, .bwm-cta-btn, .eb-cta';
    document.querySelectorAll(selectors).forEach((btn) => {
      if (btn.dataset.luxMagnetic) return;
      btn.dataset.luxMagnetic = '1';
      btn.classList.add('vp-btn-magnetic');
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.12;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.12;
        btn.style.transform = `translate(${x}px, ${y}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  function initSectionDepth() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    document.querySelectorAll('.section-glow').forEach((glow) => {
      gsap.to(glow, {
        y: 40,
        opacity: 0.8,
        ease: 'none',
        scrollTrigger: { trigger: glow.parentElement, start: 'top bottom', end: 'bottom top', scrub: 1.2 },
      });
    });
  }

  function initEditorialParallax() {
    const stage = document.querySelector('.eb-about-stage');
    if (!stage) return;
    stage.addEventListener('mousemove', (e) => {
      const rect = stage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      stage.querySelectorAll('[data-mouse-parallax]').forEach((el) => {
        const s = parseFloat(el.dataset.mouseParallax) || 12;
        el.style.transform = `translate(${x * s}px, ${y * s * 0.7}px)`;
      });
    });
    stage.addEventListener('mouseleave', () => {
      stage.querySelectorAll('[data-mouse-parallax]').forEach((el) => {
        el.style.transform = '';
      });
    });
  }

  function initBeveragesLanding() {
    const hero = document.querySelector('[data-bwm-hero]');
    if (!hero) return;

    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      hero.querySelectorAll('[data-mouse-parallax]').forEach((el) => {
        const s = parseFloat(el.dataset.mouseParallax) || 10;
        el.style.transform = `translate(${x * s}px, ${y * s * 0.6}px)`;
      });
      const bg = hero.querySelector('.bwm-hero-bg');
      if (bg) bg.style.transform = `scale(1.05) translate(${x * -8}px, ${y * -6}px)`;
    });

    hero.addEventListener('mouseleave', () => {
      hero.querySelectorAll('[data-mouse-parallax]').forEach((el) => {
        el.style.transform = '';
      });
      const bg = hero.querySelector('.bwm-hero-bg');
      if (bg) bg.style.transform = 'scale(1.05)';
    });

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      document.querySelectorAll('[data-bwm-cta]').forEach((cta) => {
        const bg = cta.querySelector('.bwm-cta-bg');
        if (!bg) return;
        gsap.to(bg, {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: { trigger: cta, start: 'top bottom', end: 'bottom top', scrub: 1.2 },
        });
      });
    }
  }

  function initCardLighting() {
    document.querySelectorAll('.card-3d').forEach((card) => {
      if (card.dataset.vpLight) return;
      card.dataset.vpLight = '1';
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
      });
      card.addEventListener('mouseleave', () => {
        card.style.setProperty('--mouse-x', '50%');
        card.style.setProperty('--mouse-y', '50%');
      });
    });
  }

  function initHomeCardHover() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.querySelectorAll('.page-home .eb-prod, .page-home .eb-cell, .page-home .eb-why-card:not(.eb-why--7)').forEach((card) => {
      if (card.dataset.homeHover) return;
      card.dataset.homeHover = '1';
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 6;
        card.style.setProperty('--home-tilt-x', `${y * -0.4}deg`);
        card.style.setProperty('--home-tilt-y', `${x * 0.4}deg`);
        card.style.transform = `perspective(900px) rotateX(var(--home-tilt-x, 0deg)) rotateY(var(--home-tilt-y, 0deg)) translateY(-8px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.setProperty('--home-tilt-x', '0deg');
        card.style.setProperty('--home-tilt-y', '0deg');
      });
    });
  }

  function initRevealStagger() {
    document.querySelectorAll('.eb-products-grid, .eb-why-grid, .bwm-svc-grid, .bwm-approach-grid').forEach((grid) => {
      grid.querySelectorAll('.gs-reveal').forEach((el, i) => {
        el.style.transitionDelay = `${Math.min(i * 0.06, 0.36)}s`;
      });
    });
  }

  window.NayaraPremium = {
    init() {
      initLenis();
      initGSAPScroll();
      init3DCards();
      init3DMouseParallax();
      initHero3DCanvas();
      initPageHero3D();
      initScrollProgress();
      initImagePremium();
      initCmsStagger();
      initHeaderLuxury();
      initFloatingDecor();
      initHeroLuxury();
      initLuxuryButtons();
      initSectionDepth();
      initEditorialParallax();
      initBeveragesLanding();
      initCardLighting();
      initRevealStagger();
    },
    refresh() {
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
      setHeaderHeight?.();
    },
    getLenis() { return lenis; },
  };

  function boot() {
    window.NayaraPremium.init();
    setHeaderHeight?.();
    window.addEventListener('load', () => {
      setHeaderHeight?.();
      window.NayaraPremium.refresh();
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
