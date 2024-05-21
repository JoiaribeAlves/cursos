function operations(numbers: number[], operation?: string) {
  if (!operation) {
    console.log("Defina uma operação");
  } else {
    if (operation === "sum") {
      const result = numbers.reduce((acc, number) => acc + number, 0);
      console.log(result);
    } else if (operation === "multiply") {
      const result = numbers.reduce((acc, number) => acc * number, 1);
      console.log(result);
    }
  }
}

operations([1, 2, 3]);
operations([4, 5, 6], "sum");
operations([7, 8, 9], "multiply");
