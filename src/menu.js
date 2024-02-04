import salad from "./assets/salad.jpg";
import burger from "./assets/burger.jpg";
console.log("menu");
export default function menu() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  // Create the main container div with class "main"
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("main");

  // Create the main content div with class "main-content"
  const mainContentDiv = document.createElement("div");
  mainContentDiv.classList.add("main-content");

  // Create the menu header with class "menu-header"
  const menuHeader = document.createElement("h2");
  menuHeader.classList.add("menu-header");
  menuHeader.textContent = "Menu";

  // Append menu header to main content div
  mainContentDiv.appendChild(menuHeader);

  // Create and append salad menu item
  createMenuItem(mainContentDiv, "Fauget salad", "50$", salad, "salad");

  // Create and append burger menu item
  createMenuItem(mainContentDiv, "Fauget burger", "20$", burger, "burger");

  // Append main content div to main container div
  mainDiv.appendChild(mainContentDiv);

  // Create the footer element with class "footer"
  const footerElement = document.createElement("footer");
  footerElement.classList.add("footer");

  const footerPara = document.createElement("p");
  footerPara.textContent = "by stbs";

  // Append paragraph to footer element
  footerElement.appendChild(footerPara);

  // Append main container div and footer element to the body

  const pageWrapper = document.createElement("div");
  pageWrapper.classList.add("page-wrapper");
  content.appendChild(pageWrapper);

  pageWrapper.appendChild(mainDiv);
  pageWrapper.appendChild(footerElement);

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
}