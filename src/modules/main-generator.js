class MainGenerator {
  constructor(name, photo, type){
    this.name = name;
    this.photo = photo;
    this.type = type;
  }

  changeImage(){
    document.getElementById("main").addEventListener('click', ()=>{
      const selectedDish = mainDishes[Math.floor(Math.random()*mainDishes.length)];
      document.getElementById("main").src = selectedDish.photo;
      document.getElementById("main").alt = selectedDish.name;
      document.getElementById("main").title = selectedDish.name;
      document.getElementById("main-name").innerHTML = selectedDish.name;
    });
  }
}

const bibimbap = new MainGenerator('Bibimbap','../images/bibimbap_main_korean.png','Korean');
const sandwich = new MainGenerator('Sandwich','../images/sandwich_main_american.png','American');
const tacos = new MainGenerator('Tacos','../images/tacos_main_mexican.png','Mexican');
const pasta = new MainGenerator('Pasta','../images/pasta_main_italian.png','Italian');

let mainDishes = [bibimbap, sandwich, tacos, pasta];

export const main_generator = mainDishes[Math.floor(Math.random()*mainDishes.length)];
