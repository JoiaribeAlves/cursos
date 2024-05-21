function sum(...n: number[]): number {
  return n.reduce((acc, num) => acc + num, 0);
}

console.log(sum(2, 4, 6, 8, 10, 12));
console.log(sum(100, 200, 300));
console.log(sum(2468));
