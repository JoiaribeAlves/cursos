function createdDate(created: Function) {
  created.prototype.createdAt = new Date();
}

@createdDate
class Book10_7 {
  id: string;
  createdAt?: Date;

  constructor(id: string) {
    this.id = id;
  }
}

@createdDate
class Pen10_7 {
  id: string;
  createdAt?: Date;

  constructor(id: string) {
    this.id = id;
  }
}

const book10_7 = new Book10_7("123");
const pen10_7 = new Pen10_7("456");

console.log(book10_7);
console.log(pen10_7.createdAt);
