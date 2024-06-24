function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é: ${obj.name}`;
}

const porta = { name: "Porta", color: "Branca", price: 250 }
const tubulacao = { price: 100, diameter: 150 }

console.log(showProductName(porta));
// console.log(showProductName(tubulacao)); error
