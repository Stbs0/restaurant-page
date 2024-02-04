export default function about() {
  const content = document.querySelector("#content");

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("nav");

  // // Create the logo div
  // const logoDiv = document.createElement("div");
  // logoDiv.classList.add("logo");

  // // Create the logo image
  // const logoImg = document.createElement("img");
  // logoImg.classList.add("img");
  // logoImg.src = "/src/assets/logo.png";
  // logoImg.alt = "logo";

  // // Append the logo image to the logo div
  // logoDiv.appendChild(logoImg);

  // // Create the nav items div
  // const navItemsDiv = document.createElement("div");
  // navItemsDiv.classList.add("nav-items");

  // // Create the ul element
  // const ulElement = document.createElement("ul");
  // ulElement.classList.add("items");

  // // Create list items and anchor elements
  // const menuItems = ["Home", "Menu", "About"];
  // menuItems.forEach((itemText) => {
  //   const liElement = document.createElement("li");
  //   const aElement = document.createElement("a");
  //   aElement.classList.add("nav-btn");
  //   aElement.href = "#";
  //   aElement.textContent = itemText;

  //   // Append anchor element to list item
  //   liElement.appendChild(aElement);

  //   // Append list item to ul element
  //   ulElement.appendChild(liElement);
  // });

  // // Append ul element to nav items div
  // navItemsDiv.appendChild(ulElement);

  // // Append logo div and nav items div to the main container div
  // mainContainer.appendChild(logoDiv);
  // mainContainer.appendChild(navItemsDiv);
  content.innerHTML = "";
  // Create the main content div
  const mainContentDiv = document.createElement("div");
  mainContentDiv.classList.add("main");

  // Create block div with heading and paragraphs
  const blockDiv = document.createElement("div");
  blockDiv.classList.add("block");

  const contactHeading = document.createElement("h1");
  contactHeading.classList.add("contact-heading");
  contactHeading.textContent = "Contact";

  // Create contact-main div with telephone and email paragraphs
  const contactMainDiv = document.createElement("div");
  contactMainDiv.classList.add("contact-main");

  const telPara = document.createElement("p");
  telPara.classList.add("tel", "para");
  telPara.innerHTML = "<strong>Tel</strong>: +966502669168";

  // Append telephone paragraph to contact-main div
  contactMainDiv.appendChild(telPara);

  // Create email paragraph
  const emailPara = document.createElement("p");
  emailPara.classList.add("email", "para");
  emailPara.innerHTML = "<strong>Email</strong>: mohammedjrt@gmail.com";

  // Append email paragraph to contact-main div
  contactMainDiv.appendChild(emailPara);

  // Append heading and contact-main div to block div
  blockDiv.appendChild(contactHeading);
  blockDiv.appendChild(contactMainDiv);

  // Append block div to main content div
  mainContentDiv.appendChild(blockDiv);

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
  const pageWrapper = document.createElement("div");
  pageWrapper.classList.add("page-wrapper");
  content.appendChild(pageWrapper);
  pageWrapper.appendChild(mainContentDiv);
 
  pageWrapper.appendChild(footerElement);
}
