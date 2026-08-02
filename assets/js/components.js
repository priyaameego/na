/* Nayara — Liquid Glass Navbar & Footer */

document.addEventListener('DOMContentLoaded', () => {
  const headerContainer = document.getElementById('header-container');
  const footerContainer = document.getElementById('footer-container');
  if (!headerContainer) return;

  const basePath = headerContainer.getAttribute('data-base') || '';
  const currentPath = window.location.pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '/');
  const data = window.NAYARA_DATA;

  const chevron = `<svg class="lg-nav-chevron w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>`;

  const pathMatch = (segment) => {
    const path = currentPath.endsWith('/') ? currentPath : currentPath + '/';
    if (segment === '/') return path === '/' || path.endsWith('/index/') || path.match(/\/na\/?$/);
    return path.includes(segment);
  };

  const isActive = (href) => href === '' ? pathMatch('/') : pathMatch(`/${href}`);

  const isParentActive = (item) => {
    if (isActive(item.href)) return true;
    if (item.items) return item.items.some(i => isActive(i.href));
    if (item.type === 'mega') return data.productCategories.some(c => isActive(c.href));
    return false;
  };

  const renderMega = (item) => {
    const catLinks = data.productCategories.map((c, i) => `
      <a href="${basePath}${c.href}" class="lg-mega-cat${i === 0 ? ' is-active' : ''}${isActive(c.href) ? ' active' : ''}" data-mega-cat="${c.id}">${c.label}</a>`).join('');

    const panels = data.productCategories.map((c, i) => {
      const subItems = (c.items || []).map((sub) =>
        `<a href="${basePath}${c.href}" class="lg-mega-subitem">${sub}</a>`
      ).join('');
      return `
      <div class="lg-mega-panel${i === 0 ? ' is-visible' : ''}" data-mega-panel="${c.id}">
        <div class="lg-mega-subgrid">${subItems || `<span class="lg-mega-subempty">View all ${c.label}</span>`}</div>
      </div>`;
    }).join('');

    return `
    <div class="lg-nav-item relative" data-nav="mega">
      <a href="${basePath}${item.href}" class="lg-nav-link inline-flex items-center ${isParentActive(item) ? 'active' : ''}">${item.label}${chevron}</a>
      <div class="lg-mega">
        <div class="lg-mega-inner liquid-glass">
          <div class="liquid-glass-blob liquid-glass-blob-1"></div>
          <div class="liquid-glass-blob liquid-glass-blob-2"></div>
          <div class="lg-mega-header">
            <div class="lg-mega-title">Our Products</div>
            <a href="${basePath}product/" class="lg-mega-all">View All →</a>
          </div>
          <div class="lg-mega-split">
            <div class="lg-mega-cats">${catLinks}</div>
            <div class="lg-mega-panels">${panels}</div>
          </div>
        </div>
      </div>
    </div>`;
  };

  const renderDrop = (item) => `
    <div class="lg-nav-item relative" data-nav="drop">
      <a href="${basePath}${item.href}" class="lg-nav-link inline-flex items-center ${isParentActive(item) ? 'active' : ''}">${item.label}${chevron}</a>
      <div class="lg-dropdown">
        <div class="lg-dropdown-inner liquid-glass">
          <div class="liquid-glass-blob liquid-glass-blob-1"></div>
          <div class="liquid-glass-blob liquid-glass-blob-3"></div>
          <div class="lg-dropdown-links relative z-10">
          ${item.items.map(sub => `
            <a href="${basePath}${sub.href}" class="lg-dropdown-link${isActive(sub.href) ? ' active' : ''}">${sub.label}</a>`).join('')}
          </div>
        </div>
      </div>
    </div>`;

  const renderLink = (item) =>
    `<a href="${basePath}${item.href}" class="lg-nav-link ${isActive(item.href) ? 'active' : ''}">${item.label}</a>`;

  const desktopNav = data.nav.main.map(item => {
    if (item.type === 'mega') return renderMega(item);
    if (item.type === 'dropdown') return renderDrop(item);
    return renderLink(item);
  }).join('');

  const mobileNav = data.nav.main.map((item, i) => {
    if (item.type === 'mega') {
      const categories = data.productCategories.map((c, j) => `
        <div class="lg-mobile-prod-cat">
          <button type="button" onclick="toggleMobileSub('mob${i}c${j}', this)" class="lg-mobile-prod-cat-btn" aria-expanded="false">
            <span>${c.label}</span>
            <svg class="lg-mobile-chevron w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div id="mob${i}c${j}" class="lg-mobile-prod-items hidden">
            ${(c.items || []).map((sub) => `<a href="${basePath}${c.href}" class="lg-mobile-prod-item">${sub}</a>`).join('')}
            <a href="${basePath}${c.href}" class="lg-mobile-prod-view">View all ${c.label} →</a>
          </div>
        </div>`).join('');

      return `<div class="lg-mobile-sub">
        <button type="button" onclick="toggleMobileSub('mob${i}', this)" class="lg-mobile-sub-btn" aria-expanded="false">
          <span>${item.label}</span>
          <svg class="lg-mobile-chevron w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div id="mob${i}" class="lg-mobile-sub-panel lg-mobile-prod-panel hidden">
          <a href="${basePath}${item.href}" class="lg-mobile-sub-link lg-mobile-sub-link--all">All Products</a>
          ${categories}
        </div>
      </div>`;
    }
    if (item.type === 'dropdown') {
      return `<div class="lg-mobile-sub">
        <button type="button" onclick="toggleMobileSub('mob${i}', this)" class="lg-mobile-sub-btn" aria-expanded="false">
          <span>${item.label}</span>
          <svg class="lg-mobile-chevron w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div id="mob${i}" class="lg-mobile-sub-panel hidden">
          ${item.items.map((s) => `<a href="${basePath}${s.href}" class="lg-mobile-sub-link">${s.label}</a>`).join('')}
        </div></div>`;
    }
    return `<a href="${basePath}${item.href}" class="lg-mobile-link${isActive(item.href) ? ' active' : ''}">${item.label}</a>`;
  }).join('');

  const socialIcons = `
    <a href="${data.site.social.instagram}" target="_blank" rel="noopener" class="topbar-social" aria-label="Instagram"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
    <a href="${data.site.social.twitter}" target="_blank" rel="noopener" class="topbar-social" aria-label="X"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
    <a href="${data.site.social.linkedin}" target="_blank" rel="noopener" class="topbar-social" aria-label="LinkedIn"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>`;

  const pfSocial = `
    <a href="${data.site.social.instagram}" target="_blank" rel="noopener" class="pf-social" aria-label="Instagram"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 110 2.881 1.44 1.44 0 010-2.881z"/></svg></a>
    <a href="${data.site.social.twitter}" target="_blank" rel="noopener" class="pf-social" aria-label="X"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
    <a href="${data.site.social.linkedin}" target="_blank" rel="noopener" class="pf-social" aria-label="LinkedIn"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a-2.063 2.063 0 110 4.126 2.063 2.063 0 010-4.126zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>`;

  const pfProducts = data.productCategories.slice(0, 6).map(c =>
    `<li><a href="${basePath}${c.href}">${c.label}</a></li>`
  ).join('');

  headerContainer.innerHTML = `
<header class="lg-header-wrap" id="main-header">
  <div id="scroll-progress"></div>
  <div class="lg-alert-bar hidden md:block">
    <div class="max-w-[1400px] mx-auto px-8 py-2.5 flex justify-between items-center text-white/90 text-sm">
      <a href="mailto:${data.site.email}" class="flex items-center gap-2 hover:text-white transition">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
        ${data.site.email}
      </a>
      <div class="flex items-center gap-5">${socialIcons}</div>
    </div>
  </div>
  <div class="lg-nav-shell" id="navbar-main">
    <div class="lg-nav-inner">
      <a href="${basePath}" class="shrink-0"><img src="${data.site.logo}" alt="${data.site.name}" class="h-14 md:h-[58px] w-auto object-contain" loading="lazy"></a>
      <nav class="hidden md:flex items-center justify-center gap-5 lg:gap-7 xl:gap-9">${desktopNav}</nav>
      <div class="hidden md:flex items-center justify-end shrink-0">
        <a href="${basePath}contact-us/" class="lg-btn-cta">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
          GET A QUOT
        </a>
      </div>
      <button id="mobile-menu-btn" type="button" class="lg-menu-btn md:hidden ml-auto" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
        <span class="lg-menu-icon" aria-hidden="true">
          <span class="lg-menu-bar"></span>
          <span class="lg-menu-bar"></span>
          <span class="lg-menu-bar"></span>
        </span>
      </button>
    </div>
  </div>
  <div id="mobile-menu-backdrop" class="lg-mobile-backdrop" aria-hidden="true"></div>
  <div id="mobile-menu" class="lg-mobile-menu" aria-hidden="true">
    <div class="lg-mobile-menu-inner">
      ${mobileNav}
      <a href="${basePath}contact-us/" class="lg-btn-cta w-full justify-center mt-6">GET A QUOT</a>
    </div>
  </div>
</header>`;

  if (footerContainer) {
    footerContainer.innerHTML = `
<footer class="premium-footer gs-reveal">
  <div class="pf-cta">
    <div class="pf-cta-inner">
      <div class="pf-cta-text">
        <span class="pf-cta-label">Need high quality products?</span>
        <h3 class="pf-cta-title">Let's build your chemical supply chain together</h3>
      </div>
      <a href="${basePath}contact-us/" class="pf-cta-btn">
        Request a Quote
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
      </a>
    </div>
  </div>

  <div class="pf-main">
    <div class="pf-glow pf-glow-1"></div>
    <div class="pf-glow pf-glow-2"></div>
    <div class="pf-grid">
      <div class="pf-brand">
        <img src="${data.site.logo}" alt="${data.site.name}" class="pf-logo" loading="lazy">
        <p class="pf-about">Chemical manufacturing &amp; trading from GIDC Ankleshwar — quality, safety, and reliable delivery for every industrial need.</p>
        <div class="pf-social-row">${pfSocial}</div>
      </div>

      <div class="pf-col">
        <h4 class="pf-heading"><span class="pf-heading-line"></span>Quick Links</h4>
        <ul class="pf-links">${data.footerSitemap.map(l => `<li><a href="${basePath}${l.href}">${l.label}</a></li>`).join('')}</ul>
      </div>

      <div class="pf-col">
        <h4 class="pf-heading"><span class="pf-heading-line"></span>Products</h4>
        <ul class="pf-links">${pfProducts}</ul>
        <a href="${basePath}product/" class="pf-view-all">View all products →</a>
      </div>

      <div class="pf-col">
        <h4 class="pf-heading"><span class="pf-heading-line"></span>Get in Touch</h4>
        <div class="pf-contact-cards">
          <a href="https://www.google.com/maps/place/GIDC+Ankleshwar" target="_blank" rel="noopener" class="pf-contact-card">
            <span class="pf-contact-icon"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg></span>
            <span>${data.site.address}</span>
          </a>
          <a href="tel:${data.site.phone.replace(/\s/g, '')}" class="pf-contact-card">
            <span class="pf-contact-icon"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg></span>
            <span>${data.site.phone}</span>
          </a>
          <a href="mailto:${data.site.email}" class="pf-contact-card">
            <span class="pf-contact-icon"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></span>
            <span>${data.site.email}</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="pf-bottom">
    <p>© ${new Date().getFullYear()} Nayara Industries. All rights reserved.</p>
    <p class="pf-credit">Crafted by <a href="https://uplinktech.in/" target="_blank" rel="noopener">UPLINK TECHNOLOGY</a></p>
  </div>
</footer>`;
  }

  initLiquidNav();
  initMegaPanels();
  setHeaderHeight();
  window.addEventListener('resize', setHeaderHeight);
});

function initMegaPanels() {
  document.querySelectorAll('[data-nav="mega"]').forEach((mega) => {
    const cats = mega.querySelectorAll('.lg-mega-cat');
    const panels = mega.querySelectorAll('.lg-mega-panel');
    if (!cats.length || !panels.length) return;

    const showPanel = (id) => {
      panels.forEach((p) => p.classList.toggle('is-visible', p.dataset.megaPanel === id));
      cats.forEach((c) => c.classList.toggle('is-active', c.dataset.megaCat === id));
    };

    cats.forEach((cat) => {
      cat.addEventListener('mouseenter', () => showPanel(cat.dataset.megaCat));
    });

    mega.addEventListener('mouseenter', () => {
      const active = mega.querySelector('.lg-mega-cat.is-active') || cats[0];
      if (active) showPanel(active.dataset.megaCat);
    });
  });
}

function initLiquidNav() {
  const header = document.getElementById('main-header');
  const navItems = document.querySelectorAll('.lg-nav-item');
  let openItem = null;

  navItems.forEach(item => {
    let t;
    item.addEventListener('mouseenter', () => {
      clearTimeout(t);
      if (openItem && openItem !== item) openItem.classList.remove('is-open');
      item.classList.add('is-open');
      openItem = item;
    });
    item.addEventListener('mouseleave', () => {
      t = setTimeout(() => { item.classList.remove('is-open'); if (openItem === item) openItem = null; }, 150);
    });
  });

  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 40);
  }, { passive: true });

  const mobBtn = document.getElementById('mobile-menu-btn');
  const mobMenu = document.getElementById('mobile-menu');
  const mobBackdrop = document.getElementById('mobile-menu-backdrop');

  const setMobileMenuOpen = (open) => {
    if (!mobBtn || !mobMenu) return;
    mobBtn.classList.toggle('is-open', open);
    mobMenu.classList.toggle('is-open', open);
    mobBackdrop?.classList.toggle('is-open', open);
    document.body.classList.toggle('overflow-hidden', open);
    mobBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    mobBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobMenu.setAttribute('aria-hidden', open ? 'false' : 'true');
    mobBackdrop?.setAttribute('aria-hidden', open ? 'false' : 'true');
  };

  if (mobBtn && mobMenu) {
    mobBtn.addEventListener('click', () => setMobileMenuOpen(!mobMenu.classList.contains('is-open')));
    mobBackdrop?.addEventListener('click', () => setMobileMenuOpen(false));
    mobMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => setMobileMenuOpen(false));
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobMenu.classList.contains('is-open')) setMobileMenuOpen(false);
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768 && mobMenu.classList.contains('is-open')) setMobileMenuOpen(false);
    });
  }
}

function setHeaderHeight() {
  const h = document.getElementById('main-header');
  if (h) document.documentElement.style.setProperty('--header-height', h.offsetHeight + 'px');
}

function toggleMobileSub(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;
  const isOpen = !el.classList.contains('hidden');
  el.classList.toggle('hidden');
  if (btn) {
    btn.classList.toggle('is-open', !isOpen);
    btn.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
  }
}
window.toggleMobileSub = toggleMobileSub;
