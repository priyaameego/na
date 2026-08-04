/* Homepage luxury motion — GSAP + IntersectionObserver */
(function () {
  if (!document.body.classList.contains('home-f500')) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initParticles() {
    const host = document.getElementById('f5-particles');
    if (!host || reduced) return;
    for (let i = 0; i < 36; i++) {
      const p = document.createElement('span');
      p.className = 'f5-particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.bottom = Math.random() * 30 + '%';
      p.style.animationDuration = 7 + Math.random() * 14 + 's';
      p.style.animationDelay = Math.random() * 8 + 's';
      p.style.opacity = String(0.15 + Math.random() * 0.55);
      host.appendChild(p);
    }
  }

  function initHeroSlider() {
    const slides = Array.from(document.querySelectorAll('.f5-hero__slide'));
    if (slides.length < 2) return;
    let i = 0;

    function activate(next) {
      slides.forEach((slide, idx) => {
        const on = idx === next;
        slide.classList.toggle('is-active', on);
        if (on) {
          // Restart Ken Burns every time the slide becomes active
          slide.style.animation = 'none';
          // force reflow
          void slide.offsetWidth;
          slide.style.animation = '';
        }
      });
      i = next;
    }

    activate(0);
    if (reduced) return;
    setInterval(() => {
      activate((i + 1) % slides.length);
    }, 7000);
  }

  function animateCounter(el) {
    if (el.dataset.done === '1') return;
    el.dataset.done = '1';
    const target = parseInt(el.getAttribute('data-counter') || '0', 10);
    const suffix = el.getAttribute('data-suffix') || '';
    if (reduced) {
      el.textContent = target + suffix;
      return;
    }
    const duration = 1600;
    const start = performance.now();
    function tick(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function assignStaggerDelays() {
    [
      '.f5-about__features',
      '.f5-why__grid',
      '.f5-services__grid',
      '.f5-industries__grid',
      '.f5-sustain__grid',
      '.f5-stats__grid',
      '.f5-certs__slider',
      '.home-products-grid',
    ].forEach((sel) => {
      const parent = document.querySelector(sel);
      if (!parent) return;
      Array.from(parent.children).forEach((child, idx) => {
        if (!child.classList.contains('f5-reveal')) child.classList.add('f5-reveal');
        child.setAttribute('data-delay', String((idx % 5) + 1));
      });
    });
  }

  function initRevealAndCounters() {
    assignStaggerDelays();
    const reveals = document.querySelectorAll('.f5-reveal');
    const counters = document.querySelectorAll('[data-counter]');

    if (reduced) {
      reveals.forEach((el) => el.classList.add('is-in'));
      counters.forEach(animateCounter);
      document.querySelectorAll('.f5-process__step').forEach((s) => s.classList.add('is-on'));
      return;
    }

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-in');
            entry.target.querySelectorAll('[data-counter]').forEach(animateCounter);
            if (entry.target.hasAttribute('data-counter')) animateCounter(entry.target);
            io.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
      );
      reveals.forEach((el) => io.observe(el));
      counters.forEach((el) => {
        if (!el.closest('.f5-reveal')) io.observe(el);
      });

      setTimeout(() => {
        document.querySelectorAll('.f5-reveal:not(.is-in)').forEach((el) => el.classList.add('is-in'));
      }, 1800);

      const stepIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.querySelectorAll('.f5-process__step').forEach((step, idx) => {
              setTimeout(() => step.classList.add('is-on'), idx * 160);
            });
            stepIo.unobserve(entry.target);
          });
        },
        { threshold: 0.3 }
      );
      const rail = document.getElementById('f5-process-rail');
      if (rail) stepIo.observe(rail);
    } else {
      reveals.forEach((el) => el.classList.add('is-in'));
      counters.forEach(animateCounter);
    }

    // Hero entrance
    const heroItems = document.querySelectorAll('.f5-hero .f5-reveal');
    heroItems.forEach((el, idx) => {
      setTimeout(() => el.classList.add('is-in'), 180 + idx * 140);
    });
    document.querySelectorAll('.f5-hero [data-counter]').forEach((el) => {
      setTimeout(() => animateCounter(el), 700);
    });
  }

  function initGsapExtras() {
    if (reduced || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    // Section titles — soft rise
    gsap.utils.toArray('.f5-section-head .f5-title').forEach((title) => {
      gsap.from(title, {
        scrollTrigger: { trigger: title, start: 'top 88%' },
        y: 40,
        opacity: 0.15,
        duration: 0.9,
        ease: 'power3.out',
      });
    });

    // Image zoom on about media
    const aboutImg = document.querySelector('.f5-about__media img');
    if (aboutImg) {
      gsap.fromTo(
        aboutImg,
        { scale: 1.12 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.f5-about__media',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }

    // Industry cards — staggered lift
    const indCards = gsap.utils.toArray('.f5-ind-card');
    if (indCards.length) {
      gsap.from(indCards, {
        scrollTrigger: { trigger: '.f5-industries__grid', start: 'top 80%' },
        y: 40,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        clearProps: 'transform',
      });
    }

    // Why / feat / service cards
    ['.f5-why-card', '.f5-feat', '.f5-service-card'].forEach((sel) => {
      const cards = gsap.utils.toArray(sel);
      if (!cards.length) return;
      gsap.from(cards, {
        scrollTrigger: { trigger: cards[0].parentElement, start: 'top 84%' },
        y: 28,
        duration: 0.65,
        stagger: 0.07,
        ease: 'power3.out',
        clearProps: 'transform',
      });
    });

    // CTA parallax
    const ctaBg = document.querySelector('.f5-cta__bg');
    if (ctaBg) {
      gsap.to(ctaBg, {
        yPercent: 12,
        scale: 1.08,
        ease: 'none',
        scrollTrigger: {
          trigger: '.f5-cta',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    // Map lines pulse emphasis
    const map = document.querySelector('.f5-global__map');
    if (map) {
      gsap.from(map, {
        scrollTrigger: { trigger: map, start: 'top 85%' },
        y: 30,
        duration: 0.9,
        ease: 'power3.out',
        clearProps: 'transform',
      });
    }
  }

  function initProductEnquireButtons() {
    document.querySelectorAll('.home-products-grid .eb-enquire').forEach((btn) => {
      btn.setAttribute('role', 'button');
      btn.setAttribute('tabindex', '0');
      const openFromCard = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const card = btn.closest('.eb-prod, .hp-prod-card');
        const title = card && card.querySelector('.eb-prod-name');
        const product = title ? title.textContent.trim() : 'Product';
        if (window.NayaraEnquire && typeof window.NayaraEnquire.open === 'function') {
          window.NayaraEnquire.open({ mode: 'enquire', product: product });
        }
      };
      btn.addEventListener('click', openFromCard);
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') openFromCard(e);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initHeroSlider();
    initRevealAndCounters();
    initGsapExtras();
    initProductEnquireButtons();
  });
})();
