class MainGenerator {
  constructor(name, photo, type){
    this.name = name;
    this.photo = photo;
    this.type = type;
  }
}

const bibimbap = new MainGenerator('Bibimbap','Photo','Korean');
const sandwich = new MainGenerator('Sandwich','Photo','American');
const tacos = new MainGenerator('Tacos','Photo','Mexican');
const pasta = new MainGenerator('Pasta','Photo','Italian');

export const main_generator = new MainGenerator('Lunch Content!');
