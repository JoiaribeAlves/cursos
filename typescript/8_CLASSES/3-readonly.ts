class Car_8_1 {
  name: string;
  readonly wheels: number = 4;

  constructor(name: string) {
    this.name = name;
  }
}

const fusca8 = new Car_8_1("Fusca");

console.log(fusca8.name);
console.log(fusca8.wheels);
