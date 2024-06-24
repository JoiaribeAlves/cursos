abstract class AbsClass {
  abstract showName(): string;
}

class Example implements AbsClass {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  showName(): string {
    return this.name;
  }
}

const newObj = new Example("Joiaribe Alves");
console.log(newObj.showName);
