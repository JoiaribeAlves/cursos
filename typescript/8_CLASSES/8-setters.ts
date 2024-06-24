class Coords_8_8 {
  x!: number;
  y!: number;

  set fillX(x: number) {
    if (x === 0) {
      return;
    }

    this.x = x;

    console.log("X inserido com sucesso");
  }

  set fillY(y: number) {
    if (y === 0) {
      return;
    }

    this.y = y;

    console.log("Y inserido com sucesso");
  }

  get coords() {
    return `X: ${this.x} e Y: ${this.y}`;
  }
}

const myCoords = new Coords_8_8();
myCoords.fillX = 15;
myCoords.fillY = 8;

console.log(myCoords);
console.log(myCoords.coords);
