export default function about() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  content.innerHTML = `
    <div class="nav">
      <div class="logo">
        <img class="img" src="/src/assets/logo.png" alt="logo" />
      </div>
      <div class="nav-items">
        <ul class="items">
          <li><a class="nav-btn home-page" href="#">Home</a></li>
          <li><a class="nav-btn menu-nav" href="#">Menu</a></li>
          <li><a class="nav-btn about" href="#">About</a></li>
        </ul>
      </div>
    </div>
    <div class="main">
      <div class="main-content">
        <div class="block">
          <h1 class="contact-heading">Contact</h1>
          <div class="contact-main">
            <p class="tel para"><strong>Tel</strong>: +966502669168</p>
          </div>
          <p class="email para"><strong>Email</strong>: mohammedjrt@gmail.com</p>
        </div>
      </div>
    </div>
    <footer class="footer"><p>by stbs</p></footer>
  `;
}
