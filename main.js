// scripts/main.js

// --- 1. Function + DOM Manipulation ---
// Display a greeting when the page loads
function showGreeting() {
  const heroSection = document.querySelector('.hero-inner');
  const greeting = document.createElement('p');
  greeting.textContent = "Welcome to Atelier Luxury — explore timeless style.";
  greeting.classList.add('greeting-text');
  heroSection.appendChild(greeting);
}

document.addEventListener('DOMContentLoaded', showGreeting);


// --- 2. Event Handling ---
// Handle form submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent actual submission
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}! Your inquiry has been received.`);
    contactForm.reset();
  });
}


// --- 3. DOM Manipulation + Event Handling ---
// Toggle dark mode theme
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  const footerText = document.getElementById('footerText');
  if (document.body.classList.contains('dark-mode')) {
    footerText.textContent = "Dark Mode: On — Embrace the elegance of contrast.";
  } else {
    footerText.textContent = "© 2025 Atelier Luxury. All rights reserved.";
  }
});
