// menu toggle
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("move");
  navLinks.classList.toggle("open-menu");
});

// CLOSE MENU ON LINK CLICK
const navItems = document.querySelectorAll(".nav-link-item");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuIcon.classList.remove("move");
    navLinks.classList.remove("open-menu");
  });
});

// CLOSE MENU ON OUTSIDE CLICK
document.addEventListener("click", (event) => {
  if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
    menuIcon.classList.remove("move");
    navLinks.classList.remove("open-menu");
  }
});

// CLOSE MENU ON SCROLL
window.addEventListener("scroll", () => {
  menuIcon.classList.remove("move");
  navLinks.classList.remove("open-menu");
  // header shadow on scroll
  const header = document.querySelector("header");
  header.classList.toggle("shadow", window.scrollY > 0);
});

// scroll reveal animations
const animate = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: "2500",
  delay: "300",
  // reset:true, // animation repeat on scroll
});

animate.reveal(".nav, .heading");
animate.reveal(".home-text, .shipping-content", { origin: "left" });
animate.reveal(".home-img", { origin: "bottom" });
animate.reveal(".shipping-image", { origin: "right" });
animate.reveal(".box, .banner-box, .product-box, .footer-col ", {
  interval: 100,
});
