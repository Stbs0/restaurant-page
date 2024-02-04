export default function about() {
  const content = document.querySelector("#content");

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("nav");

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
