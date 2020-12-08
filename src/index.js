import { header } from './modules/header';
import { main_generator } from './modules/main-generator';
import { side_generator } from './modules/side-generator';
import { drink_generator } from './modules/side-generator';
import { menu } from './modules/menu';
import { footer } from './modules/footer';

class App {
  constructor(){
    this.renderTemplate();
  }

  renderTemplate() {
    const template = `
      <header>
        <div id="header">
          <h1>${header.title}</h1>
          <img src="${header.logo}" title="logo" alt="logo">
        </div>
      </header>

      <main>
        <div id="food">
          <div>
            <img class="side" src="../images/guac_side_mexican.png" alt="guacamole" title="guacamole">
            <img class="drink" src="../images/lemonade_drink_american.png" alt="lemonade" title="lemonade">
          </div>
          <img class="main" src="../images/pasta_main_italian.png" title="pasta" alt="pasta">
        </div>
        <section>
          <h2>${menu.title}</h2>
          <hr>
          <ul>
            <li>${menu.main}</li>
            <li>${menu.side}</li>
            <li>${menu.drink}</li>
          </ul>
          <p>${menu.prompt}</p>
        </section>
      </main>

      <footer>
        ${footer.prompt}
        ${footer.name}
      </footer>
    `;

    document.body.innerHTML = template;
  }
}

new App;
