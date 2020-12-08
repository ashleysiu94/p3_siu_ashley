class DrinkGenerator {
  constructor(name, photo, type){
    this.name = name;
    this.photo = photo;
    this.type = type;
  }
}

const hotTea = new DrinkGenerator('Hot Tea','../images/hottea_drink_korean.png','Korean');
const lemonade = new DrinkGenerator('Lemonade','../images/lemonade_drink_american.png','American');
const horchata = new DrinkGenerator('Horchata','../images/horchata_drink_mexican.png','Mexican');
const chiantiWine = new DrinkGenerator('Chianti Wine','../images/wine_drink_italian.png','Italian');

export const drink_generator = new DrinkGenerator('Lunch Drinks Content!');
