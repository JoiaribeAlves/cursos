function classDecorator(constructor: Function) {
  console.log(constructor);

  if (constructor.name === "User10_3") {
    console.log("Criando usuário");
  }
}

@classDecorator
class User10_3 {
  name

  constructor(name: string) {
    this.name = name;
  }
}

// @ts-ignore
const user = new User10_3("Joiaribe");
console.log(user);
