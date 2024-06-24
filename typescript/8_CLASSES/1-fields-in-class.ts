class User_8_1 {
  name!: string;
  age!: number;
}

const joi = new User_8_1();

console.log(joi);

joi.name = "Joiaribe";
// joi.rule = "Admin"; error
