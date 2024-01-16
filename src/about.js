export default function about() {
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
      </div><div class="main">
        <div class="main-content">
          <div class="block">
            <h1 class="contact-heading">contact</h1>
            <div class="conatct-main">
              <p class="tel para"><strong>Tell</strong>: +966502669168</p>
            </div>
            <p class="email para"><strong>Email</strong> mohammedjrt@gmail.com</p>
          </div>
        </div>
      </div>
      <footer class="footer"><p>by stbs</p></footer>`);
}
