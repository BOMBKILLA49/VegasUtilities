// Vegas Utilities — shared behavior
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Basic required-field check before allowing native submit (Formspree handles the rest)
  var leadForm = document.querySelector('#lead-form');
  if (leadForm) {
    leadForm.addEventListener('submit', function (e) {
      var required = leadForm.querySelectorAll('[required]');
      var missing = false;
      required.forEach(function (field) {
        if (!field.value || !field.value.trim()) missing = true;
      });
      if (missing) {
        e.preventDefault();
        var notice = leadForm.querySelector('.form-error');
        if (notice) notice.style.display = 'block';
        window.scrollTo({ top: leadForm.offsetTop - 120, behavior: 'smooth' });
      }
    });
  }

  // Footer year
  var yearEl = document.querySelector('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
