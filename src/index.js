// Import the CSS file to apply styles to the webpage
import "./style.css";

// Import the necessary modules for the webpage
import menu from "./menu.js";
import homePage from "./page-loader.js";
import about from "./about.js";

// Load the home page when the webpage is first loaded
homePage();

// Get references to the navigation buttons and the content area
const menuBtn = document.querySelector(".menu-nav");
const homePageBtn = document.querySelector(".home-page");
const aboutBtn = document.querySelector(".about");

// Add event listeners to the navigation buttons to load the corresponding pages
homePageBtn.addEventListener("click", () => {
  // Clear the content area
  content.innerHTML = "";
  // Load the home page
  return homePage();
});

menuBtn.addEventListener("click", () => {
  // Clear the content area
  content.innerHTML = "";
  // Load the menu page
  return menu();
});

aboutBtn.addEventListener("click", () => {
  // Clear the content area
  content.innerHTML = "";
  // Load the about page
  return about();
});
