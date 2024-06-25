import { Human } from "./my-types";

class User implements Human {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const joao = new User("João", 25);
console.log(joao.age);
