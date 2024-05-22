interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  powers: string[];
}

const amanda: Human = {
  name: 'amanda',
  age: 30,
}

console.log(amanda);

const joiaribe: SuperHuman = {
  name: 'joiaribe',
  age: 25,
  powers: ["strong"],
}

console.log(joiaribe);
console.log(joiaribe.powers);
