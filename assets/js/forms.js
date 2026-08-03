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

  function wireContactForm(form, source) {
    if (!form || form.dataset.mysqlWired === '1') return;
    form.dataset.mysqlWired = '1';
    form.setAttribute('method', 'post');
    form.setAttribute('action', '/api/contact');

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
        await postJson(`${apiBase()}/api/contact`, {
          name: fd.get('name'),
          email: fd.get('email'),
          subject: fd.get('subject'),
          message: fd.get('message'),
          source,
        });
        showStatus(form, 'ok', 'Thank you! Your message has been sent.');
        form.reset();
      } catch (err) {
        showStatus(form, 'err', err.message || 'Could not send. Please try again.');
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
        showStatus(form, 'ok', 'Application submitted successfully. We will contact you soon.');
        form.reset();
      } catch (err) {
        showStatus(form, 'err', err.message || 'Could not submit. Please try again.');
      } finally {
        if (btn) {
          btn.disabled = false;
          btn.textContent = prev;
        }
      }
    });
  }

  function boot() {
    document.querySelectorAll('form[data-form="contact"], #contact form, .eb-connect-form form, .sp-contact-form-wrap form').forEach((form) => {
      const source = document.body.classList.contains('page-home') && form.closest('#contact')
        ? 'home-contact'
        : 'contact';
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
