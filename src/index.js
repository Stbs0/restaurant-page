import "./style.css";

import homePage from "./page-loader.js";
homePage();
const menu = document.querySelector(".menu");
const homePageBtn = document.querySelector(".home-page");
const about = document.querySelector(".about");
const content = document.querySelector("#content");

homePageBtn.addEventListener("click", () => {
  content.innerHTML = "";
  homePage();
});
menu.addEventListener("click", () => {
  content.innerHTML = "";
  menu();
});
about.addEventListener("click", () => {
  content.innerHTML = "";
  about();
});
