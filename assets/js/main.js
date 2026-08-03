/* Nayara Industries - Premium Interactions & Animations */

document.addEventListener('DOMContentLoaded', () => {
  initPageLoader();
  initScrollReveal();
  initStaggerGroups();
  initCounters();
  initHeroSlider();
  initKenBurns();
  initProductSlider();
  initMagneticButtons();
  initTiltCards();
  initParallax();
  initSmoothAnchors();
  initLuxuryEffects();
});

function initPageLoader() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 1000);
    }, 600);
  });
}

function initScrollProgress() {
  if (window.NayaraPremium) return;
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = progress + '%';
  }, { passive: true });
}

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-scale, [data-reveal]');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach((el, i) => {
    if (!el.dataset.delay) el.dataset.delay = (i % 5) * 80;
    observer.observe(el);
  });
}

function initStaggerGroups() {
  document.querySelectorAll('[data-stagger]').forEach(group => {
    const children = group.querySelectorAll('[data-stagger-item]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          children.forEach((child, i) => {
            setTimeout(() => child.classList.add('visible'), i * 100);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    observer.observe(group);
  });
}

function initLuxuryEffects() {
  // Smooth number glow on stat cards
  document.querySelectorAll('.stat-card').forEach(card => {
    card.addEventListener('mouseenter', () => card.classList.add('stat-glow'));
    card.addEventListener('mouseleave', () => card.classList.remove('stat-glow'));
  });

  // Nav link magnetic micro-movement
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mousemove', (e) => {
      const rect = link.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.08;
      link.style.transform = `translateY(${x * 0.1}px)`;
    });
    link.addEventListener('mouseleave', () => { link.style.transform = ''; });
  });
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.counter, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);
    el.textContent = current.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

function initHeroSlider() {
  const root = document.getElementById('hero-swiper');
  if (!root) {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length < 2) return;
    let current = 0;
    setInterval(() => {
      slides[current].classList.remove('opacity-100');
      slides[current].classList.add('opacity-0');
      current = (current + 1) % slides.length;
      slides[current].classList.remove('opacity-0');
      slides[current].classList.add('opacity-100');
    }, 6000);
    return;
  }

  const panels = root.querySelectorAll('.hero-slide-panel');
  const dots = root.querySelectorAll('.hero-swiper-dot');
  const prev = root.querySelector('.hero-swiper-prev');
  const next = root.querySelector('.hero-swiper-next');
  let current = 0;
  let timer;

  function goTo(idx) {
    current = (idx + panels.length) % panels.length;
    panels.forEach((p, i) => p.classList.toggle('is-active', i === current));
    dots.forEach((d, i) => d.classList.toggle('is-active', i === current));
    panels.forEach((p, i) => {
      if (i === current) {
        p.querySelectorAll('.sp-hero-title, .sp-hero-lead, .sp-eyebrow, .sp-btn, .hero-slide-heading, .hero-slide-title, .hero-slide-desc, .hero-slide-btn').forEach(el => {
          el.style.animation = 'none';
          void el.offsetWidth;
          el.style.animation = '';
        });
      }
    });
    root.dispatchEvent(new CustomEvent('hero:slidechange', { detail: { index: current } }));
  }

  function startAuto() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 7000);
  }

  prev?.addEventListener('click', () => { goTo(current - 1); startAuto(); });
  next?.addEventListener('click', () => { goTo(current + 1); startAuto(); });
  dots.forEach(d => d.addEventListener('click', () => { goTo(+d.dataset.go); startAuto(); }));
  startAuto();
}

function initKenBurns() {
  document.querySelectorAll('.ken-burns-img').forEach(img => {
    img.classList.add('ken-burns-active');
  });
}

function initProductSlider() {
  const track = document.querySelector('.product-track');
  if (!track) return;

  let position = 0;
  const speed = 0.5;
  let paused = false;

  track.parentElement.addEventListener('mouseenter', () => { paused = true; });
  track.parentElement.addEventListener('mouseleave', () => { paused = false; });

  function animate() {
    if (!paused) {
      position -= speed;
      const halfWidth = track.scrollWidth / 2;
      if (Math.abs(position) >= halfWidth) position = 0;
      track.style.transform = `translateX(${position}px)`;
    }
    requestAnimationFrame(animate);
  }
  animate();
}

function initMagneticButtons() {
  document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

function initTiltCards() {
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(1200px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-10px) scale(1.02)`;
      card.style.transition = 'transform 0.15s ease-out';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    });
  });
}

function initParallax() {
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  if (parallaxEls.length) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      parallaxEls.forEach(el => {
        const speed = parseFloat(el.dataset.parallax) || 0.3;
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });
    }, { passive: true });
  }

  document.addEventListener('mousemove', (e) => {
    const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    document.querySelectorAll('[data-mouse-parallax]').forEach(el => {
      const strength = parseFloat(el.dataset.mouseParallax) || 20;
      el.style.transform = `translate(${mouseX * strength}px, ${mouseY * strength}px)`;
    });
  });
}

function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
