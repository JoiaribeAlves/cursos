let fruits: ReadonlyArray<string> = ["Maçã", "Mamão", "Uva", "Abacaxi"];

// fruits.push("Pera"); error

console.log(fruits);

fruits.forEach((fruit) => {
  console.log("Fruta: " + fruit);
});

fruits = fruits.map((fruit) => {
  return `Fruta ${fruit}`;
});

console.log(fruits);
