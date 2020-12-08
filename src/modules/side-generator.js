class SideGenerator {
  constructor(name, photo, type){
    this.name = name;
    this.photo = photo;
    this.type = type;
  }
}

const kimchi = new SideGenerator('Kimchi','../images/kimchi_side_korean.png','Korean');
const salad = new SideGenerator('Side','../images/salad_side_american.png','American');
const guacamole = new SideGenerator('Guacamole','../images/guac_side_mexican.png','Mexican');
const minestrone = new SideGenerator('Minestrone','../images/minestrone_side_italian.png','Italian');

export const side_generator = new SideGenerator('Lunch Side Dish Content!');
