export default function homePage() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
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
  const pageWrapper = document.createElement("div");
  pageWrapper.classList.add("page-wrapper");
  content.appendChild(pageWrapper);

  pageWrapper.appendChild(mainDiv);
  pageWrapper.appendChild(footerElement);
}
