const myClass = class <T> {
  name

  constructor(name: T) {
    this.name = name;
  }
}

const pessoa1 = new myClass("Joiaribe");
console.log(pessoa1.name);
