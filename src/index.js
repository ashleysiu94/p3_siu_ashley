import { header } from './modules/header';
import { main_generator } from './modules/main-generator';
import { side_generator } from './modules/side-generator';
import { drink_generator } from './modules/drink-generator';
import { menu } from './modules/menu';
import { footer } from './modules/footer';

class App {
  constructor(){
    this.renderTemplate();
    main_generator.changeImage();
    side_generator.changeImage();
    drink_generator.changeImage();
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
            <img id="side" src="${side_generator.photo}" alt="${side_generator.name}" title="${side_generator.name}">
            <img id="drink" src="${drink_generator.photo}" alt="${drink_generator.name}" title="${drink_generator.name}">
          </div>
          <img id="main" src="${main_generator.photo}" title="${main_generator.name}" alt="${main_generator.name}">
        </div>
        <section id="menu">
          <h2>${menu.title}</h2>
          <hr>
          <ul>
            <li>${menu.main}<span id="main-name">${main_generator.name}</span></li>
            <li>${menu.side}<span id="side-name">${side_generator.name}</span></li>
            <li>${menu.drink}<span id="drink-name">${drink_generator.name}</span></li>
          </ul>
          <p>${menu.prompt}</p>
        </section>
      </main>

      <footer>
        ${footer.prompt}
        ${footer.myName}
      </footer>
    `;

    document.body.innerHTML = template;
  }
}

new App;
