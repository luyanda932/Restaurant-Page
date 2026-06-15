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
const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const aboutButton = document.getElementById("about-button");
const contactButton = document.getElementById("contact-button");

homeButton.addEventListener("click", () => {
  clearContent();
  loadHome();
});

menuButton.addEventListener("click", () => {
  clearContent();
  loadMenu();
});

aboutButton.addEventListener("click", () => {
  clearContent();
  loadAbout();
});

contactButton.addEventListener("click", () => {
  clearContent();
  loadContact();
});

const header = document.querySelector("header");
const nav = document.querySelector("nav");
