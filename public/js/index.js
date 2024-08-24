/*******************************************************/
/*        
/*              AUTHOR:amour dahou
/*         GITHUB:http://github.com/dereck22dev
/*         COPYRIGHT 2022 ALL RIGHT RESERVED
/*              UPDATED AT 11th Sep 2022
/*
/******************************************************/

//principal variables declaration and initialization
const hamburger = document.querySelector(".hamburger");
const hamburgerBox = document.querySelector(".hamburgerBox");
const header = document.querySelector("header");
const navigation = document.querySelector("nav");
const body = document.querySelector("body");
const copyYear = document.querySelector(".copyYear");
const goUp = document.querySelector(".goUp");
let Pagedown = document.querySelector(".copyrightBox");
let PagedownPos = Pagedown.getBoundingClientRect().y;

//STICKY HEADER
window.addEventListener("scroll", sticky_header);
function sticky_header() {
  header.classList.toggle("sticky", window.scrollY > 0);
}
//Mobile Navigation Menu Opening
hamburger.addEventListener("click", showNav);
function showNav() {
  navigation.classList.toggle("showNav");
  closeNav();
}
//Mobile Navigation closure button displaying
function closeNav() {
  hamburger.classList.toggle("closeMenu");
  hamburgerBox.classList.toggle("hamburgerBoxFixation");
}
//Let's close Nav when menu link is clicked
const navLink = document.querySelectorAll("nav ul li a");
navLink.forEach((i) => {
  i.addEventListener("click", () => {
    navigation.classList.remove("showNav");
    hamburger.classList.remove("closeMenu");
    hamburgerBox.classList.remove("hamburgerBoxFixation");
    body.removeAttribute("style");
  });
});
//GO TO DOCUMENT TOP BUTTON
window.addEventListener("scroll", toggleBtn);
function toggleBtn() {
  goUp.classList.toggle(
    "showGoUpBtn",
    window.scrollY > window.outerHeight * 2 && window.scrollY < PagedownPos
  );
}
//Copyright Year Update
let nYear = new Date();
copyYear.textContent = nYear.getFullYear();
