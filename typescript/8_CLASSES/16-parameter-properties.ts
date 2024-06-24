class ParameterProperties {
  constructor(public name: string, private price: number) {
    this.name = name;
    this.price = price;
  }

  get details(): string {
    return `name: ${this.name}, price: ${this.price}`;
  }
}

const shirt1 = new ParameterProperties("Camisa polo", 59.99);
console.log(shirt1.details);
