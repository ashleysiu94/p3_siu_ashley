import { header } from './modules/header';
import { lunch_generator } from './modules/lunch-generator';
import { menu } from './modules/menu';
import { footer } from './modules/footer';

class App {
  constructor(){
    this.renderTemplate();
  }

  renderTemplate() {
    const template = `
      <header>
        <div>
          <h1>${header.title}</h1>
        </div>
      </header>

      <main>
        <div>
          <div>
            <div id="side"></div>
            <div id="drink"></div>
          </div>
          <div id="main-course"></div>
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
        ${footer.footerContent}
      </footer>
    `;

    document.body.innerHTML = template;
  }
}

new App;
