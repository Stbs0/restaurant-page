import logo from "./assets/logo.png";
export default function createNav() {
  const content = document.querySelector("#content");
  console.log(content);
  const navDiv = document.createElement("div");
  navDiv.classList.add("nav");

  // Create the logo div with class "logo"
  const logoDiv = document.createElement("div");
  logoDiv.classList.add("logo");

  // Create the logo image with class "img"
  const logoImg = document.createElement("img");
  logoImg.classList.add("img");
  logoImg.src = logo;
  logoImg.alt = "logo";

  // Append the logo image to the logo div
  logoDiv.appendChild(logoImg);

  // Create the nav items div with class "nav-items"
  const navItemsDiv = document.createElement("div");
  navItemsDiv.classList.add("nav-items");

  // Create the ul element with class "items"
  const ulElement = document.createElement("ul");
  ulElement.classList.add("items");

  // Create list items and anchor elements with class "nav-btn"
  const menuItems = ["Home", "Menu", "About"];
  menuItems.forEach((itemText) => {
    const liElement = document.createElement("li");
    const aElement = document.createElement("a");
    aElement.classList.add(`${itemText}`);
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
  navDiv.appendChild(logoDiv);
  navDiv.appendChild(navItemsDiv);
  content.appendChild(navDiv);
}
