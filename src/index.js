// Import the CSS file to apply styles to the webpage
import "./style.css";
// Import the necessary modules for the webpage
import menu from "./menu.js";
import homePage from "./page-loader.js";
import about from "./about.js";

import logo from "./assets/logo.png";
document.querySelector(".img").src = logo;
homePage();
const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");
homeBtn.addEventListener("click", () => {
  homePage();
});
menuBtn.addEventListener("click", () => {
  menu();
});
aboutBtn.addEventListener("click", () => {
  about();
});
