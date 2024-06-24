type Truck = {
  km: number,
  kg: number,
  description: string,
}

type Km = Truck["km"];

const newTruck: Truck = {
  km: 80000,
  kg: 5000,
  description: "Caminhão leve",
}

function showKm(km: Km) {
  return `A quilometragem do caminhão é: ${km}`;
}

console.log(showKm(newTruck.km));
