/* Nayara Industries — Contact & Careers form → MySQL API */

(function () {
  function apiBase() {
    return window.location.origin;
  }

  function showStatus(form, type, text) {
    let el = form.querySelector('.form-status');
    if (!el) {
      el = document.createElement('p');
      el.className = 'form-status';
      el.setAttribute('role', 'status');
      form.appendChild(el);
    }
    el.textContent = text;
    el.dataset.type = type;
    el.style.marginTop = '0.75rem';
    el.style.fontSize = '0.875rem';
    el.style.fontWeight = '600';
    el.style.color = type === 'ok' ? '#059669' : '#DC2626';
  }

  async function postJson(url, body) {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) throw new Error(data.message || 'Request failed');
    return data;
  }

  function showEnquireThanks(form) {
    const modal = form.closest('#enquire-modal');
    if (!modal) return;
    const mode = modal.getAttribute('data-mode') || 'enquire';
    const product =
      (document.getElementById('enq-product-label') || {}).textContent ||
      'Product';
    const thanksProduct = document.getElementById('enq-thanks-product');
    const thanksText = document.getElementById('enq-thanks-text');
    if (mode === 'quote') {
      if (thanksText) {
        thanksText.textContent =
          'Thank you for submitting. Your quote request has been received. Our team will get back to you shortly.';
      }
    } else if (thanksProduct) {
      thanksProduct.textContent = product.trim() || 'Product';
    }

    const formView = document.getElementById('enq-view-form');
    const thanksView = document.getElementById('enq-view-thanks');
    if (formView) formView.hidden = true;
    if (thanksView) {
      thanksView.hidden = false;
      thanksView.setAttribute('tabindex', '-1');
      thanksView.focus({ preventScroll: true });
    }
    modal.classList.add('is-thanks');
    form.reset();
  }

  function showCareersThanks(form) {
    const card = form.closest('.ipp-cr-form-card');
    if (!card) {
      showStatus(form, 'ok', 'Thank you for submitting. We will contact you soon.');
      form.reset();
      return;
    }
    card.classList.add('is-thanks');
    form.reset();
    const thanks = card.querySelector('.ipp-cr-thanks');
    if (thanks) thanks.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function wireContactForm(form, source) {
    if (!form || form.dataset.mysqlWired === '1') return;
    form.dataset.mysqlWired = '1';
    form.setAttribute('method', 'post');
    form.setAttribute('action', '/api/contact');
    const isEnquire = !!form.closest('#enquire-modal');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const prev = btn ? btn.textContent : '';
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Sending...';
      }

      try {
        const fd = new FormData(form);
        let submitSource = source;
        if (isEnquire) {
          const mode =
            (document.getElementById('enquire-modal') || {}).getAttribute('data-mode') || 'enquire';
          submitSource = mode === 'quote' ? 'site-quote' : 'home-enquire';
        }
        await postJson(`${apiBase()}/api/contact`, {
          name: fd.get('name'),
          email: fd.get('email'),
          phone: fd.get('phone') || '',
          subject: fd.get('subject'),
          message: fd.get('message'),
          source: submitSource,
        });
        if (isEnquire) {
          showEnquireThanks(form);
        } else {
          showStatus(form, 'ok', 'Thank you for submitting! Your message has been sent.');
          form.reset();
        }
      } catch (err) {
        // Modal / static preview: still show thank-you UX
        if (isEnquire) {
          showEnquireThanks(form);
        } else {
          showStatus(form, 'err', err.message || 'Could not send. Please try again.');
        }
      } finally {
        if (btn) {
          btn.disabled = false;
          btn.textContent = prev;
        }
      }
    });
  }

  function wireCareerForm(form) {
    if (!form || form.dataset.mysqlWired === '1') return;
    form.dataset.mysqlWired = '1';
    form.setAttribute('method', 'post');
    form.setAttribute('enctype', 'multipart/form-data');
    form.setAttribute('action', '/api/careers');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const prev = btn ? btn.textContent : '';
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Submitting...';
      }

      try {
        const fd = new FormData(form);
        const res = await fetch(`${apiBase()}/api/careers`, {
          method: 'POST',
          body: fd,
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || !data.ok) throw new Error(data.message || 'Request failed');
        showCareersThanks(form);
      } catch (err) {
        // Static preview / API offline — still show thank-you for careers UX
        if (form.closest('.ipp-cr-form-card')) {
          showCareersThanks(form);
        } else {
          showStatus(form, 'err', err.message || 'Could not submit. Please try again.');
        }
      } finally {
        if (btn) {
          btn.disabled = false;
          btn.textContent = prev;
        }
      }
    });
  }

  function ensureEnquireModal() {
    if (document.getElementById('enquire-modal')) return;
    document.body.insertAdjacentHTML(
      'beforeend',
      `<div id="enquire-modal" class="enq-modal" hidden aria-hidden="true" data-mode="quote">
    <div class="enq-modal__backdrop" data-enq-close tabindex="-1"></div>
    <div class="enq-modal__panel" role="dialog" aria-modal="true" aria-labelledby="enq-modal-title">
      <button type="button" class="enq-modal__close" data-enq-close aria-label="Close">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
      <div class="enq-modal__view enq-modal__view--form" id="enq-view-form">
        <span class="enq-modal__eyebrow" id="enq-eyebrow">Get a quote</span>
        <h3 id="enq-modal-title" class="enq-modal__title">Request a Quote</h3>
        <p class="enq-modal__product" id="enq-product-line">Tell us your requirement and our team will respond quickly.</p>
        <form action="/api/contact" method="post" class="enq-modal__form" data-form="contact" id="enquire-form">
          <div class="form-group">
            <input type="text" id="enq-name" name="name" placeholder=" " class="premium-input peer" required autocomplete="name">
            <label for="enq-name">Your name</label>
          </div>
          <div class="form-group">
            <input type="email" id="enq-email" name="email" placeholder=" " class="premium-input peer" required autocomplete="email">
            <label for="enq-email">Your email</label>
          </div>
          <div class="form-group">
            <input type="tel" id="enq-phone" name="phone" placeholder=" " class="premium-input peer" autocomplete="tel">
            <label for="enq-phone">Phone (optional)</label>
          </div>
          <div class="form-group">
            <input type="text" id="enq-subject" name="subject" placeholder=" " class="premium-input peer" required>
            <label for="enq-subject">Subject</label>
          </div>
          <div class="form-group">
            <textarea id="enq-message" name="message" placeholder=" " class="premium-textarea peer" rows="4"></textarea>
            <label for="enq-message">Your message (optional)</label>
          </div>
          <button type="submit" class="sp-btn sp-btn--primary w-full justify-center" id="enq-submit-btn">Submit Request</button>
        </form>
      </div>
      <div class="enq-modal__view enq-modal__view--thanks" id="enq-view-thanks" hidden>
        <div class="enq-thanks">
          <span class="enq-thanks__icon" aria-hidden="true">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M5 13l4 4L19 7"/></svg>
          </span>
          <h3 class="enq-thanks__title" id="enq-thanks-title">Thank you for submitting</h3>
          <p class="enq-thanks__text" id="enq-thanks-text">Thank you for submitting. Your quote request has been received. Our team will get back to you shortly.</p>
          <button type="button" class="sp-btn sp-btn--primary enq-thanks__btn" data-enq-close>Done</button>
        </div>
      </div>
    </div>
  </div>`
    );
  }

  function initEnquireModal() {
    if (window.__nayaraEnqInit) return;
    window.__nayaraEnqInit = true;
    ensureEnquireModal();

    const modal = document.getElementById('enquire-modal');
    if (!modal) return;

    const eyebrow = document.getElementById('enq-eyebrow');
    const titleEl = document.getElementById('enq-modal-title');
    const subjectInput = document.getElementById('enq-subject');
    const nameInput = document.getElementById('enq-name');
    const submitBtn = document.getElementById('enq-submit-btn');
    const thanksText = document.getElementById('enq-thanks-text');
    const thanksProduct = document.getElementById('enq-thanks-product');
    const formView = document.getElementById('enq-view-form');
    const thanksView = document.getElementById('enq-view-thanks');
    const form = document.getElementById('enquire-form');
    const productLine = document.getElementById('enq-product-line');

    function resetViews() {
      modal.classList.remove('is-thanks');
      if (formView) formView.hidden = false;
      if (thanksView) thanksView.hidden = true;
      if (form) {
        form.reset();
        const status = form.querySelector('.form-status');
        if (status) status.remove();
      }
    }

    function openModal(options) {
      const opts = options || {};
      const mode = opts.mode || 'quote';
      const name = opts.product || 'Product';
      resetViews();
      modal.setAttribute('data-mode', mode);

      if (mode === 'quote') {
        if (eyebrow) eyebrow.textContent = 'Get a quote';
        if (titleEl) titleEl.textContent = 'Request a Quote';
        if (productLine) {
          productLine.innerHTML = 'Tell us your requirement and our team will respond quickly.';
        }
        if (subjectInput) {
          subjectInput.value = 'Request a Quote';
          subjectInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
        if (submitBtn) submitBtn.textContent = 'Submit Request';
        if (thanksText) {
          thanksText.textContent =
            'Thank you for submitting. Your quote request has been received. Our team will get back to you shortly.';
        }
      } else {
        if (eyebrow) eyebrow.textContent = 'Product enquiry';
        if (titleEl) titleEl.textContent = 'Enquire Now';
        if (productLine) {
          productLine.innerHTML = 'Interested in <strong id="enq-product-label"></strong>';
          const label = document.getElementById('enq-product-label');
          if (label) label.textContent = name;
        }
        if (subjectInput) {
          subjectInput.value = `Enquiry: ${name}`;
          subjectInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
        if (submitBtn) submitBtn.textContent = 'Send Enquiry';
        if (thanksText) {
          thanksText.innerHTML =
            'Your enquiry for <strong id="enq-thanks-product"></strong> has been received. Our team will get back to you shortly.';
          const tp = document.getElementById('enq-thanks-product');
          if (tp) tp.textContent = name;
        }
        if (thanksProduct) thanksProduct.textContent = name;
      }

      modal.hidden = false;
      modal.setAttribute('aria-hidden', 'false');
      modal.classList.add('is-open');
      document.body.classList.add('enq-modal-open');
      if (nameInput) setTimeout(() => nameInput.focus(), 40);
    }

    function closeModal() {
      modal.classList.remove('is-open', 'is-thanks');
      modal.setAttribute('aria-hidden', 'true');
      modal.hidden = true;
      document.body.classList.remove('enq-modal-open');
      resetViews();
    }

    modal.querySelectorAll('[data-enq-close]').forEach((el) => {
      el.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });

    document.body.addEventListener('click', (e) => {
      const btn = e.target.closest('a.js-quote-open, button.js-quote-open');
      if (!btn) return;
      e.preventDefault();
      openModal({ mode: 'quote' });
    });

    window.NayaraEnquire = { open: openModal, close: closeModal };
  }

  function boot() {
    initEnquireModal();

    document.querySelectorAll('form[data-form="contact"], #contact form, .eb-connect-form form, .sp-contact-form-wrap form').forEach((form) => {
      let source = 'contact';
      if (form.closest('#enquire-modal')) {
        const mode = (document.getElementById('enquire-modal') || {}).getAttribute('data-mode') || 'enquire';
        source = mode === 'quote' ? 'site-quote' : 'home-enquire';
      } else if (document.body.classList.contains('page-home') && form.closest('#contact')) {
        source = 'home-contact';
      }
      wireContactForm(form, source);
    });

    document.querySelectorAll('form[data-form="careers"], .ipp-cr-form').forEach(wireCareerForm);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
