class Person_8_7 {
  name
  surname

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  get fullName() {
    return this.name + ' ' + this.surname;
  }
}

const p1 = new Person_8_7("Amanda", "Novais");
console.log(p1.fullName);
