class DrinkGenerator {
  constructor(name, photo, type){
    this.name = name;
    this.photo = photo;
    this.type = type;
  }
}

const hotTea = new DrinkGenerator('Hot Tea','Photo','Korean');
const lemonade = new DrinkGenerator('Lemonade','Photo','American');
const horchata = new DrinkGenerator('Horchata','Photo','Mexican');
const chiantiWine = new DrinkGenerator('Chianti Wine','Photo','Italian');

export const drink_generator = new DrinkGenerator('Lunch Content!');
