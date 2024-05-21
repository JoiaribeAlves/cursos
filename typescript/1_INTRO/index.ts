const firstName = "Joiaribe";
const age = 25;
const admin = true;

function greeting(name: string) {
  console.log("Olá " + name);
}

greeting(firstName);
// greeting(age);
// greeting(admin);

// desafio 1
function sum(n1: number, n2: number) {
  const result = n1 + n2;
  console.log("Soma " + result);
}

sum(14, 54);
