class Item<T, U> {
  first
  second

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }
}

const newItem = new Item("Caixa", "Surpresa");
console.log(newItem);
