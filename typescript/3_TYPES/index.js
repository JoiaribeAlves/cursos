// 1 - arrays
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
numbers.push(9);
console.log(numbers);
// numbers.push("teste"); error
var names = ["Joiaribe", "Amanda"];
// names.push(4); error
// 2 - other array syntax
var quantity = [100, 200, 300, 400];
console.log(quantity);
// 3 - any
var arr1 = [1, "Joiaribe", true, [], { name: "Username" }];
console.log(arr1);
// 4 - typed parameters
function sum(a, b) {
    console.log(a + b);
}
sum(1, 2);
// sum("Isso está ", "errado"); error
// sum(true, false); error
// 5 - return type
function salute(name) {
    return "Ol\u00E1, ".concat(name);
    // return 5; error
}
salute("Joiaribe");
// 6 - anonymous functions
setTimeout(function () {
    var salary = 1000;
    // console.log(parseFloat(salary)) error
}, 2000);
// 7 - objects types
function passCoordinates(coordinates) {
    console.log("X coordinates: " + coordinates.x);
    console.log("Y coordinates: " + coordinates.y);
}
var coordObj = { x: 325, y: 84 };
passCoordinates(coordObj);
// 8 - optional props
function showNumbers(a, b, c, d) {
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
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return "Ol\u00E1 ".concat(firstName, " ").concat(lastName, ", seja bem-vindo!");
    }
    return "Ol\u00E1 ".concat(firstName, ", seja bem-vindo!");
}
console.log(advancedGreeting("Joiaribe"));
console.log(advancedGreeting("Joiaribe", "Alves"));
// 9 - union types
function showBalance(amount) {
    console.log("Seu saldo atual \u00E9 de R$".concat(amount));
}
showBalance(4500);
showBalance("4500");
// showBalance(true); error
// 10 - advanced union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário aprovado!";
    }
    return "A fun\u00E7\u00E3o do usu\u00E1rio \u00E9: ".concat(role);
}
console.log(showUserRole(false));
console.log(showUserRole(true));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(id);
}
showId(28745);
showId("28745");
function showCoords(coord) {
    console.log("Coordenada X: ".concat(coord.x));
    console.log("Coordenada Y: ".concat(coord.y));
    console.log("Coordenada Z: ".concat(coord.z));
}
showCoords({ x: 15, y: 44, z: 1 });
var user = { name: "Joiaribe", age: 25 };
console.log(user);
// type PersonType = {
//   name: string;
// }
// type PersonType = {
//   age: string;
// }
// 14 - literal type
var test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(direction);
}
showDirection("left");
// showDirection("center") error
// 15 - non null assertion operators
var p = document.getElementById("p");
console.log(p.innerText);
// 16 - bigint
var n;
// n = 1; error
n = 1000n;
console.log(n);
console.log(typeof n);
// 17 - symbol
var symbolA = Symbol("A");
var symbolB = Symbol("A");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
