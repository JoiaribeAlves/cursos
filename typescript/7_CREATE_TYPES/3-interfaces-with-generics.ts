interface MyObject<T, U, Q> {
  name: string;
  wheels: T;
  engine: U;
  color: Q;
}

type Motorcycle = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myMotorcycle: Motorcycle = {
  name: "CG Titan 160",
  wheels: 2,
  engine: 160,
  color: "Vermelho",
}

const myPen: Pen = {
  name: "Caneta BIC",
  wheels: false,
  engine: false,
  color: "Azul",
}

console.log(myMotorcycle);
console.log(myPen);
