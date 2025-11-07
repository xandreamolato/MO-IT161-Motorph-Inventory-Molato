/* =====================================================
   Atelier Luxury - Main Script
   Author: Xandrea Molato
   Description: Handles basic interactivity and form validation
   ===================================================== */

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// Contact form validation
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedback = document.getElementById("formFeedback");

    // Basic field validation
    if (!name || !email || !message) {
      feedback.textContent = "Please fill out all fields before submitting.";
      feedback.className = "alert alert-warning mt-3";
      return;
    }

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      feedback.textContent = "Please enter a valid email address.";
      feedback.className = "alert alert-danger mt-3";
      return;
    }

    // Simulate successful form submission
    feedback.textContent = "Thank you for reaching out! We’ll get back to you soon.";
    feedback.className = "alert alert-success mt-3";

    // Clear form fields
    contactForm.reset();
  });
}

// Navbar color change on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shadow-sm", "bg-white");
  } else {
    navbar.classList.remove("shadow-sm", "bg-white");
  }
});
