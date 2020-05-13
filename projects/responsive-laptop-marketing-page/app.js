const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const lines = document.querySelectorAll(".line");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  lines.forEach((line) => {
    line.classList.toggle("switch");
  });
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
