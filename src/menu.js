import salad from "./assets/salad.jpg";
import burger from "./assets/burger.jpg";
console.log("menu");
export default function menu() {
  const content = document.querySelector("#content");

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
        <h2 class="menu-header">Menu</h2>

        <div class="menu">
          <h1 class="salad-heading">Fauget salad</h1>
          <h3 class="para">50$</h3>
          <img class="salad" src="${salad}" alt="salad" />
        </div>
        <div class="menu">
          <h1 class="burger-heading">Fauget burger</h1>
          <h3 class="para">20$</h3>
          <img class="burger" src="${burger}" alt="burger" />
        </div>
      </div>
    </div>
    <footer class="footer"><p>by stbs</p></footer>
  `);
}
