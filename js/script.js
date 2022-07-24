// scroll to nav-dark
const nav = document.getElementById("nav");

window.addEventListener("scroll", function () {
  scrollposition = window.scrollY;

  if (scrollposition >= 65) {
    nav.classList.add("nav-dark");
  } else if (scrollposition <= 65) {
    nav.classList.remove("nav-dark");
  }
});

// onclick close nav
const toggle = document.getElementById("toggle");
const navbarNav = document.getElementById("navbarNav");

document.onclick = function (e) {
  if (e.target.id !== "navbarNav" && e.target.id !== "toggle") {
    toggle.classList.add("collapsed");
    navbarNav.classList.remove("show");
  }
};
