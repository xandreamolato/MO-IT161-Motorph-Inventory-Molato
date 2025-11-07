// ----------------------------
// Atelier Luxury — Main JS
// ----------------------------

// Smooth scrolling for navbar links
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

// Contact Form Validation and Feedback
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedback = document.getElementById("formFeedback");

    // Clear previous feedback
    feedback.textContent = "";
    feedback.className = "";

    // Field validation
    if (!name || !email || !message) {
      feedback.textContent = "Please complete all fields before submitting.";
      feedback.className = "alert alert-warning mt-3";
      return;
    }

    // Basic email format validation
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailPattern.test(email)) {
      feedback.textContent = "Please enter a valid email address.";
      feedback.className = "alert alert-danger mt-3";
      return;
    }

    // Simulated success message (no backend)
    feedback.textContent = "Thank you for your inquiry. We’ll respond within 48 hours.";
    feedback.className = "alert alert-success mt-3";

    // Reset form
    contactForm.reset();
  });
}

// Navbar behavior on scroll (adds background & shadow)
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});
