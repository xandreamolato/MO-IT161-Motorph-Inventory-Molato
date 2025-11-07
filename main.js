// main.js — placeholder for future Milestone 2 JS.
// For MS1 we only provide a tiny enhancement: prevent default submit and show a small confirmation message.

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (evt) {
    evt.preventDefault(); // UI placeholder — no backend for Milestone 1
    // Simple visual feedback (temporary)
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.textContent = 'Sent ✓';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Send Inquiry';
        btn.disabled = false;
        form.reset();
      }, 1600);
    }
  });
});
