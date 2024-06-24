interface CoordObject {
  [index: string]: number;
}

let coords: CoordObject = { x: 20 }

console.log(coords);

coords.y = 50;

console.log(coords);

