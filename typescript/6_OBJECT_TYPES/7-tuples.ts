type fiveNumbers = [number, number, number, number, number];

const myNumbers1: fiveNumbers = [1, 2, 3, 4, 5];
// const myNumbers2: fiveNumbers = [6, 7, 8, 9, 10, 11]; error

type NameAndAge = [string, number];

const person: NameAndAge = ["Joiaribe", 25];

person[1] = 30;
// person[1] = "30"; error

console.log(person);

function showNumbers(numbers: readonly [number, number]) {
  console.log(numbers[0]);
  console.log(numbers[1]);

  // numbers[0] = 400; error
}

showNumbers([500, 600]);
