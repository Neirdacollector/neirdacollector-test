const menuBurger = document.querySelector(".menu-burger");
const navLinks = document.querySelector(".nav-links");
const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;

/* Burger Menu */

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navLinks.classList.add("mobile-menu");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navLinks.classList.remove("mobile-menu");
    menuOpen = false;
  }
});

menuBurger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});

/* Sticky navbar */

const navbar = document.querySelector(".navbar");
const header = document.querySelector("header")
const socialMedia = document.querySelector(".social-links");


window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("sticky");
    header.classList.add("header_transp")
    socialMedia.classList.add("media_sticky");
    
  } else {
    navbar.classList.remove("sticky");
    header.classList.remove("header_transp");
    socialMedia.classList.remove("media_sticky");
    
  }
});

// Button to the top //

const btn = document.querySelector(".upbtn");

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
