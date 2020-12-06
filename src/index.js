import { header } from './modules/header';
import { lunch-generator } './modules/lunch-generator';
import { footer } from './modules/footer';

class App {
  constructor(){
    this.renderTemplate();
  }

  renderTemplate() {
    const template = `
      <header>
        <h1></h1>
      </header>

      <main>
        <div>
          <div>
            <div>
              appetizer
            </div>
            <div>
              drink
            </div>
          </div>
          <div>
            main course
          </div>
        </div>
        <section>
          <h2></h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <p></p>
        </section>
      </main>

      <footer>
        <p></p>
      </footer>
    `;

    document.body.innerHTML = template;
  }
}

new App;
