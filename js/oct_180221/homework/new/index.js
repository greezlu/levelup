class Furniture {

  constructor (options) {
    for (let key in options) {
      this[key] = options[key];
    }
  }

  [Symbol.toPrimitive](hint) {
    return "Furniture: "+this.length+"x"+this.width+"x"+ this.height+" | "+this.color;
  }

}

class Structure {

  constructor (options) {
    for (let key in options) {
      this[key] = options[key];
    }
  }

  [Symbol.toPrimitive](hint) {
    return "Structure: "+this.length+"x"+this.width+"x"+this.height+"\n"+
          String(this.furniture);
  }

}

class Building {

  constructor (options) {
    for (let key in options) {
      this[key] = options[key];
    }
  }

  [Symbol.toPrimitive](hint) {
    return "Building: "+this.length+"x"+this.width+"x"+this.height+
          " | "+this.color+
          " | "+this.streetName+", "+this.streetNumber+"\n"+
          String(this.structure);
  }

}

let table = new Furniture ({
  length: 120,
  width: 90,
  height: 80,
  color: "Black"
});

let room = new Structure({
  length: 10,
  width: 5,
  height: 3,
  furniture: table
});

let house = new Building({
  length: 10,
  width: 5,
  height: 5,
  color: "Green",
  streetName: "Kolotyshkina",
  streetNumber: 7,
  structure: room
});


console.log(String(house));