const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-links");
const hamburgerIcon = document.querySelector(".hamburger");

navToggle.addEventListener("change", () => {
  if (navToggle.checked) {
    navLinks.style.display = "flex";
    hamburgerIcon.textContent = "X";
  } else {
    navLinks.style.display = "none";
    hamburgerIcon.textContent = "☰";
  }
});
