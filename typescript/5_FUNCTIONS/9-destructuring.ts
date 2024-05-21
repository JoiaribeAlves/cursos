function showProductDetails({ name, price }: { name: string, price: number }): string {
  return `O produto ${name} custa R$ ${price}`;
}

const shirt = { name: "Camisa regata", price: 19.90 };

console.log(showProductDetails(shirt));
