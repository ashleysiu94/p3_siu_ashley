class Menu {
  constructor(title, main, side, drink, prompt){
    this.title = "Menu";
    this.main = "Main Course: ";
    this.side = "Side Dish: ";
    this.drink = "Drink: ";
    this.prompt = "Click on the photos to change food items!";
  }
}

export const menu = new Menu ('Menu Content!');