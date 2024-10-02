// Select the hamburger button and nav menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Toggle mobile menu
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => link.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Scroll top button //
const scrollUpBtn = document.getElementById('scrollUpBtn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    scrollUpBtn.classList.add('visible');
  } else {
    scrollUpBtn.classList.remove('visible');
  }
});

scrollUpBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0
  });
});
