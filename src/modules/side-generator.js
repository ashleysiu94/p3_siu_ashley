class SideGenerator {
  constructor(name, photo, type){
    this.name = name;
    this.photo = photo;
    this.type = type;
  }

  changeImage(){
    document.getElementById("side").addEventListener('click', ()=>{
      const selectedDish = sideDishes[Math.floor(Math.random()*sideDishes.length)];
      document.getElementById("side").src = selectedDish.photo;
      document.getElementById("side").alt = selectedDish.name;
      document.getElementById("side").title = selectedDish.name;
      document.getElementById("side-name").innerHTML = selectedDish.name;
    });
  }
}

const kimchi = new SideGenerator('Kimchi','../images/kimchi_side_korean.png','Korean');
const salad = new SideGenerator('Salad','../images/salad_side_american.png','American');
const guacamole = new SideGenerator('Guacamole','../images/guac_side_mexican.png','Mexican');
const minestrone = new SideGenerator('Minestrone','../images/minestrone_side_italian.png','Italian');

let sideDishes = [kimchi, salad, guacamole, minestrone];

export const side_generator = sideDishes[Math.floor(Math.random()*sideDishes.length)];
