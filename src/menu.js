import saladImage from "./assets/salad.jpg";
import burgerImage from "./assets/burger.jpg";

console.log("menu");

export default function menu() {
  const content = document.querySelector("#content");

  // Create the main container div
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("nav");

  // Create the logo div
  const logoDiv = document.createElement("div");
  logoDiv.classList.add("logo");

  // Create the logo image
  const logoImg = document.createElement("img");
  logoImg.classList.add("img");
  logoImg.src = "/src/assets/logo.png";
  logoImg.alt = "logo";

  // Append the logo image to the logo div
  logoDiv.appendChild(logoImg);

  // Create the nav items div
  const navItemsDiv = document.createElement("div");
  navItemsDiv.classList.add("nav-items");

  // Create the ul element
  const ulElement = document.createElement("ul");
  ulElement.classList.add("items");

  // Create list items and anchor elements
  const menuItems = ["Home", "Menu", "About"];
  menuItems.forEach((itemText) => {
    const liElement = document.createElement("li");
    const aElement = document.createElement("a");
    aElement.classList.add("nav-btn");
    aElement.href = "#";
    aElement.textContent = itemText;

    // Append anchor element to list item
    liElement.appendChild(aElement);

    // Append list item to ul element
    ulElement.appendChild(liElement);
  });

  // Append ul element to nav items div
  navItemsDiv.appendChild(ulElement);

  // Append logo div and nav items div to the main container div
  mainContainer.appendChild(logoDiv);
  mainContainer.appendChild(navItemsDiv);

  // Create the main content div
  const mainContentDiv = document.createElement("div");
  mainContentDiv.classList.add("main");

  // Create menu header
  const menuHeader = document.createElement("h2");
  menuHeader.classList.add("menu-header");
  menuHeader.textContent = "Menu";

  // Append menu header to main content div
  mainContentDiv.appendChild(menuHeader);

  // Create and append salad menu item
  createMenuItem(mainContentDiv, "Fauget salad", "50$", saladImage, "salad");

  // Create and append burger menu item
  createMenuItem(mainContentDiv, "Fauget burger", "20$", burgerImage, "burger");

  // Append main content div to main container div
  mainContainer.appendChild(mainContentDiv);

  // Create the footer element
  const footerElement = document.createElement("footer");
  footerElement.classList.add("footer");

  const footerPara = document.createElement("p");
  footerPara.textContent = "by stbs";

  // Append paragraph to footer element
  footerElement.appendChild(footerPara);

  // Clear existing content in the container and append the new content
  content.innerHTML = "";
  content.appendChild(mainContainer);
  content.appendChild(footerElement);
}

function createMenuItem(
  parentElement,
  headingText,
  priceText,
  imageUrl,
  imageAlt
) {
  const menuItemDiv = document.createElement("div");
  menuItemDiv.classList.add("menu");

  const headingElement = document.createElement("h1");
  headingElement.classList.add(`${imageAlt}-heading`);
  headingElement.textContent = headingText;

  const priceElement = document.createElement("h3");
  priceElement.classList.add("para");
  priceElement.textContent = priceText;

  const imageElement = document.createElement("img");
  imageElement.classList.add(imageAlt);
  imageElement.src = imageUrl;
  imageElement.alt = imageAlt;

  // Append heading, price, and image to menu item div
  menuItemDiv.appendChild(headingElement);
  menuItemDiv.appendChild(priceElement);
  menuItemDiv.appendChild(imageElement);

  // Append menu item div to parent element
  parentElement.appendChild(menuItemDiv);
}
