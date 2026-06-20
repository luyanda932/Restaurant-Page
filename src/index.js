console.log("Hello, Odinite!");
import "./styles.css";

import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";
import loadContact from "./contact.js";

console.log("Restaurant page loaded!");

function clearContent() {
  const content = document.getElementById("content");
  content.textContent = "";
}

// Initial page load
loadHome();

// Buttons
const homeLinks = document.querySelectorAll(".home-link");
const menuLinks = document.querySelectorAll(".menu-link");
const aboutLinks = document.querySelectorAll(".about-link");
const contactLinks = document.querySelectorAll(".contact-link");

homeLinks.forEach((link) => {
  link.addEventListener("click", () => {
    clearContent();
    loadHome();
  });
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    clearContent();
    loadMenu();
  });
});

aboutLinks.forEach((link) => {
  link.addEventListener("click", () => {
    clearContent();
    loadAbout();
  });
});

contactLinks.forEach((link) => {
  link.addEventListener("click", () => {
    clearContent();
    loadContact();
  });
});
