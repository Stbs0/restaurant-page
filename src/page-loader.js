export default function homePage() {
  const content = document.querySelector("#content");
  // Create the main container div with class "nav"
  const navDiv = document.createElement("div");
  navDiv.classList.add("nav");

  // Create the logo div with class "logo"
  const logoDiv = document.createElement("div");
  logoDiv.classList.add("logo");

  // Create the logo image with class "img"
  const logoImg = document.createElement("img");
  logoImg.classList.add("img");
  logoImg.src = "/src/assets/logo.png";
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

  // Create the main container div with class "main"
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("main");

  // Create the main content div with class "main-content"
  const mainContentDiv = document.createElement("div");
  mainContentDiv.classList.add("main-content");

  // Create loc div with heading and paragraph
  const locDiv = document.createElement("div");
  locDiv.classList.add("loc");

  const locHeading = document.createElement("h1");
  locHeading.textContent = "Stbs's Restaurant";

  const locPara = document.createElement("p");
  locPara.classList.add("para");
  locPara.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sequi dignissimos a magni ipsam. Dicta minus asperiores modi reprehenderit vero!";

  // Append heading and paragraph to loc div
  locDiv.appendChild(locHeading);
  locDiv.appendChild(locPara);

  // Append loc div to main content div
  mainContentDiv.appendChild(locDiv);

  // Create additional paragraphs and append to main content div
  for (let i = 0; i < 2; i++) {
    const paraElement = document.createElement("p");
    paraElement.classList.add("para");
    paraElement.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    mainContentDiv.appendChild(paraElement);
  }

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
  content.appendChild(navDiv);
  content.appendChild(mainDiv);
  content.appendChild(footerElement);
}
