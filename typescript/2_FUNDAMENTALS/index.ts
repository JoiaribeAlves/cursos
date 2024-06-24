// 1- numbers
const x: number = 10;
console.log(x);
console.log(typeof x);

const y: number = 3.1415;
console.log(y);
console.log(y.toPrecision(3));
console.log(typeof y);
// console.log(y.toUppercase()); error

// 2 - strings
const firstName: string = "Joiaribe";
const lastName: string = "Guimarães";

console.log(firstName);
console.log(firstName.toUpperCase());

const fullName = firstName + " " + lastName;
console.log(typeof fullName);

// 3 - boolean
const a: boolean = false;
console.log(typeof a);

// 4 - inference and annotation
const n1 = 40; // inf
const n2: number = 50; // ann
console.log("n1: ", typeof n1);
console.log("n2: ", typeof n2);

const admin = true; // inf
const isAdmin: boolean = false; // ann
console.log("admin: ", typeof admin);
console.log("isAdmin: ", typeof isAdmin);

const zipCode = "76.890-000"; // inf
const street: string = "Boulevard"; // ann
console.log("zipCode: ", typeof zipCode);
console.log("street: ", typeof street);

// challenge
const number1 = 999;
const number1AsString = number1.toString();
console.log("O número é: ", number1AsString);
