// 1 - arrays
let numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
numbers.push(9);
console.log(numbers);
// numbers.push("teste"); error

let names: string[] = ["Joiaribe", "Amanda"];
// names.push(4); error

// 2 - other array syntax
let quantity: Array<number> = [100, 200, 300, 400];
console.log(quantity);

// 3 - any
let arr1: any = [1, "Joiaribe", true, [], { name: "Username" }];
console.log(arr1);

// 4 - typed parameters
function sum(a: number, b: number) {
  console.log(a + b);
}

sum(1, 2);
// sum("Isso está ", "errado"); error
// sum(true, false); error


// 5 - return type
function salute(name: string): string {
  return `Olá, ${name}`;
  // return 5; error
}

salute("Joiaribe");

// 6 - anonymous functions
setTimeout(function () {
  const salary: number = 1000;
  // console.log(parseFloat(salary)) error
}, 2000);

// 7 - objects types
function passCoordinates(coordinates: { x: number, y: number }) {
  console.log("X coordinates: " + coordinates.x);
  console.log("Y coordinates: " + coordinates.y);
}

const coordObj = { x: 325, y: 84 };

passCoordinates(coordObj);

// 8 - optional props
function showNumbers(a: number, b: number, c: number, d?: number) {
  console.log("A: " + a);
  console.log("B: " + b);
  console.log("C: " + c);
  if (d) {
    console.log("D: " + d);
  }
}

showNumbers(1, 2, 3, 4);
// showNumbers(1, 2); error
showNumbers(4, 5, 6);

function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Olá ${firstName} ${lastName}, seja bem-vindo!`;
  }

  return `Olá ${firstName}, seja bem-vindo!`;
}

console.log(advancedGreeting("Joiaribe"));
console.log(advancedGreeting("Joiaribe", "Alves"));

// 9 - union types
function showBalance(amount: number | string) {
  console.log(`Seu saldo atual é de R$${amount}`);
}

showBalance(4500);
showBalance("4500");
// showBalance(true); error

// 10 - advanced union types
function showUserRole(role: boolean | string) {
  if (typeof role === "boolean") {
    return "Usuário aprovado!";
  }

  return `A função do usuário é: ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole(true));
console.log(showUserRole("Admin"));

// 11 - type alias
type ID = string | number;

function showId(id: ID) {
  console.log(id);
}

showId(28745);
showId("28745");

// 12 - interfaces
interface Point {
  x: number;
  y: number;
  z: number;
}

function showCoords(coord: Point) {
  console.log(`Coordenada X: ${coord.x}`);
  console.log(`Coordenada Y: ${coord.y}`);
  console.log(`Coordenada Z: ${coord.z}`);
}

showCoords({ x: 15, y: 44, z: 1 })

// 13 - type alias x interfaces
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const user: Person = { name: "Joiaribe", age: 25 };
console.log(user);

// type PersonType = {
//   name: string;
// }

// type PersonType = {
//   age: string;
// }

// 14 - literal type
let test: "testando";
test = "testando";

console.log(test);

function showDirection(direction: "left" | "right") {
  console.log(direction);
}

showDirection("left");
// showDirection("center") error

// 15 - non null assertion operators
const p = document.getElementById("p");
console.log(p!.innerText);

// 16 - bigint
let n: bigint;

// n = 1; error
n = 1000n;

console.log(n);
console.log(typeof n);

// 17 - symbol
let symbolA: symbol = Symbol("A");
let symbolB = Symbol("A");

console.log(symbolA == symbolB);
console.log(symbolA === symbolB);

