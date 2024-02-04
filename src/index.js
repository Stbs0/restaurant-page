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
// const navBtns = document.querySelector(".item");
// navBtns.addEventListener("click", (e) => {
//   if (e.target.className === "Home") {
//     homePage();
//   } else if (e.target.className === "Menu") {
//     menu();
//   } else if (e.target.className === "About") {
//     about();
//   }
// });
// // Load the home page when the webpage is first loaded

// // Get references to the navigation buttons and the content area

// const menuBtn = document.querySelector(".Menu");
// const homePageBtn = document.querySelector(".Home");
// const aboutBtn = document.querySelector(".About");

// // Add event listeners to the navigation buttons to load the corresponding pages
// homePageBtn.addEventListener("click", () => {
//   // Clear the content area
//   content.innerHTML = "";
//   // Load the home page
//   return homePage();
// });

// menuBtn.addEventListener(
//   "click",
//   () => {
//     // Clear the content area
//     content.innerHTML = "";
//     // Load the menu page
//     menu();
//   }

//   // Clear the content area
//   // content.innerHTML = "";
//   // Load the menu page
// );

// aboutBtn.addEventListener(
//   "click",
//   about
//   // Clear the content area
//   // content.innerHTML = "";
//   // Load the about page
// );
