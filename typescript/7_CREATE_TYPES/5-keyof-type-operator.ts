type Character1 = { name: string, age: number, hasDriverLicense: boolean }

type C = keyof Character1;

function showCharName(obj: Character1, key: C) {
  return `${obj[key]}`;
}

const myChar: Character1 = {
  name: "Joiaribe",
  age: 25,
  hasDriverLicense: true,
}

console.log(showCharName(myChar, "name"));
