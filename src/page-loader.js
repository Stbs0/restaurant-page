export default function homePage() {
  return (content.innerHTML = `<div class="nav">
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
          <div class="loc">
            <h1>Stbs/s restaurant</h1>
            <p class="para">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              sequi dignissimos a magni ipsam. Dicta minus asperiores modi
              reprehenderit vero!
            </p>
          </div>
          <p class="para">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </p>
          <p class="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <footer class="footer"><p>by stbs</p></footer>`);
}
