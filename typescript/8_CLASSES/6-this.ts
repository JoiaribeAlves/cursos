class Truck_8_6 {
  model
  hp

  constructor(model: string, hp: number) {
    this.model = model;
    this.hp = hp;
  }

  showDetails() {
    return `O caminhão ${this.model}, tem ${this.hp} cavalos de potência`;
  }
}

const volvo = new Truck_8_6("FH 16", 500);
const volvo2 = new Truck_8_6("NL 12", 410);
const scania = new Truck_8_6("143 HW", 450);

console.log(volvo.showDetails());
console.log(volvo2.showDetails());
console.log(scania.showDetails());
