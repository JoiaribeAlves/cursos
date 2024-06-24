class Dog1 {
  name!: string;
}

class Cat {
  name!: string;
}

const animal: Dog1 = new Cat();
console.log(animal);
