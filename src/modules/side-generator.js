class SideGenerator {
  constructor(name, photo, type){
    this.name = name;
    this.photo = photo;
    this.type = type;
  }
}

const kimchi = new SideGenerator('Kimchi','Photo','Korean');
const salad = new SideGenerator('Side','Photo','American');
const guacamole = new SideGenerator('Guacamole','Photo','Mexican');
const minestrone = new SideGenerator('Minestrone','Photo','Italian');

export const side_generator = new SideGenerator('Lunch Content!');
