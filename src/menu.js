import salad from "./assets/salad.jpg";
import burger from "./assets/burger.jpg";
export default function menu() {
  content.innerHTML = ` <div class="nav">
        <div class="logo">
          <img class="img" src="/src/assets/logo.png" alt="logo" />
        </div>
        <div class="nav-items">
          <ul class="items">
            <il><a class="nav-btn home-page" href="#">HomePage</a></il>
            <il><a class="nav-btn menu-nav" href="#">Menu</a></il>
            <il><a class="nav-btn about" href="#">About</a></il>
          </ul>
        </div>
      </div>
      <div class="main">
        <div class="main-content">
          <h2 class="menu-header">Menu</h2>

          <div class="menu">
            <h1 class="salad-heading">Fauget salad</h1>
          
            <h3 class="para">
             50$
            </h3>
          </div>
          <div class="menu">
            <h1 class="burger-heading">Fauget burger</h1>
          
           <h3 class="para">
             20$
            </h3>
          </div>
        </div>
      </div>
      <footer class="footer"><p>by stbs</p></footer>`;
  const Salad = new Image();
  const Burger = new Image();
  Salad.src = salad;
  Burger.src = burger;
  const menu = document.querySelector(".salad-heading");
  const menu1 = document.querySelector(".burger-heading");
  Salad.className = "salad";
  Burger.className = "burger";
  menu.insertAdjacentElement("afterend", Salad);
  menu1.insertAdjacentElement("afterend", Burger);
}
