function firstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(firstElement(["Joiaribe", "Amanda"]));
console.log(firstElement([25, 30]));
console.log(firstElement([{ admin: true }, { admin: false }]));

function mergeObjects<T, U>(obj1: T, obj2: U) {
  return {
    ...obj1,
    ...obj2,
  }
}

const obj1 = { name: "Joiaribe" };
const obj2 = { age: 25, admin: false };

console.log(mergeObjects(obj1, obj2));

function biggestNumber<T extends number | string>(a: T, b: T): T {
  if (+a > +b) {
    return a;
  } else {
    return b;
  }
}

console.log(biggestNumber(4, 8));
console.log(biggestNumber(12, 6));
console.log(biggestNumber("588", "367"));

function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays<number | string>([1, 2, 3], ["4", "5", "6"]));
