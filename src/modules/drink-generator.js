class DrinkGenerator {
  constructor(name, photo, type){
    this.name = name;
    this.photo = photo;
    this.type = type;
  }

  changeImage(){
    document.getElementById("drink").addEventListener('click', ()=>{
      const selectedDrink = drinks[Math.floor(Math.random()*drinks.length)];
      document.getElementById("drink").src = selectedDrink.photo;
      document.getElementById("drink").alt = selectedDrink.name;
      document.getElementById("drink").title = selectedDrink.name;
      document.getElementById("drink-name").innerHTML = selectedDrink.name;
    });
  }
}

const hotTea = new DrinkGenerator('Hot Tea','../images/hottea_drink_korean.png','Korean');
const lemonade = new DrinkGenerator('Lemonade','../images/lemonade_drink_american.png','American');
const horchata = new DrinkGenerator('Horchata','../images/horchata_drink_mexican.png','Mexican');
const chiantiWine = new DrinkGenerator('Chianti Wine','../images/wine_drink_italian.png','Italian');

let drinks = [hotTea, lemonade, horchata, chiantiWine];

export const drink_generator = drinks[Math.floor(Math.random()*drinks.length)];
