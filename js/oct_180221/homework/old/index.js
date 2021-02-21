function Furniture (length, width, height, color) {
  this.length = length;
  this.width = width;
  this.height = height;
  this.color = color;
  this.toString = function () {
    return this.length+"x"+this.width+"x"+this.height+" | "+this.color+"\n";
  }
}

function Structure (length, width, height, furniture) {
  this.length = length;
  this.width = width;
  this.height = height;
  this.furniture = furniture;
  this.toString = function () {
    return this.length+"x"+this.width+"x"+this.height+"\n"+
           "Furniture: "+this.furniture;
  }
}

function Building (length, width, height, color, stretName, streetNumber, structure) {
  this.length = length;
  this.width = width;
  this.height = height;
  this.color = color;
  this.stretName = stretName;
  this.streetNumber = streetNumber;
  this.structure = structure;
  this.toString = function () {
    return "Building: "+this.length+"x"+this.width+"x"+this.height+" | "
           +this.stretName+", "+this.streetNumber+"\n"+
           "Structure: "+this.structure;
  }
}

let table = new Furniture(120, 90, 80, "Black");
let room = new Structure(10, 5, 3, table);
let house = new Building(10, 5, 5, "Green", "Kolotyshkina", 7, room);

alert(house);