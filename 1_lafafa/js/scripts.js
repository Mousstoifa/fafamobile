document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("open");
  });

  // Smooth scroll for anchor links
  const links = document.querySelectorAll("nav ul li a");

  for (const link of links) {
    link.addEventListener("click", smoothScroll);
  }

  function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  }
});
scripts.js;

document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript Loaded");
});
