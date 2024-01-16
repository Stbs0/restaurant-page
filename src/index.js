import "./style.css";
import menu from "./menu.js";
import homePage from "./page-loader.js";
import about from "./about.js";

homePage();
const menuBtn = document.querySelector(".menu-nav");
const homePageBtn = document.querySelector(".home-page");
const aboutBtn = document.querySelector(".about");
const content = document.querySelector("#content");

homePageBtn.addEventListener("click", () => {
  content.innerHTML = "";
  homePage();
});
menuBtn.addEventListener("click", () => {
  content.innerHTML = "";
  menu();
});
aboutBtn.addEventListener("click", () => {
  content.innerHTML = "";
  about();
});
