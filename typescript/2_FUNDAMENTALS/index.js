// 1- numbers
var x = 10;
console.log(x);
console.log(typeof x);
var y = 3.1415;
console.log(y);
console.log(y.toPrecision(3));
console.log(typeof y);
// console.log(y.toUppercase()); error
// 2 - strings
var firstName = "Joiaribe";
var lastName = "Guimarães";
console.log(firstName);
console.log(firstName.toUpperCase());
var fullName = firstName + " " + lastName;
console.log(typeof fullName);
// 3 - boolean
var a = false;
console.log(typeof a);
// 4 - inference and annotation
var n1 = 40; // inf
var n2 = 50; // ann
console.log("n1: ", typeof n1);
console.log("n2: ", typeof n2);
var admin = true; // inf
var isAdmin = false; // ann
console.log("admin: ", typeof admin);
console.log("isAdmin: ", typeof isAdmin);
var zipCode = "76.890-000"; // inf
var street = "Boulevard"; // ann
console.log("zipCode: ", typeof zipCode);
console.log("street: ", typeof street);
// challenge
var number1 = 999;
var number1AsString = number1.toString();
console.log("O número é: ", number1AsString);
