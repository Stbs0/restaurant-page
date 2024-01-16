export default function homePage() {
  const content = document.querySelector("#content");
  console.log("homePage");
  return (content.innerHTML = `
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
        <div class="loc">
          <h1>Stbs's Restaurant</h1>
          <p class="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            sequi dignissimos a magni ipsam. Dicta minus asperiores modi
            reprehenderit vero!
          </p>
        </div>
        <p class="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p class="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
    <footer class="footer"><p>by stbs</p></footer>
  `);
}
