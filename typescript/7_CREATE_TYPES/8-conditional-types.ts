interface A { }
interface B extends A { }
interface Test {
  showName(): string;
}

type myType = B extends A ? number : string;

const someVar: myType = 5;

type myType2 = Test extends { showName(): string } ? number : string;
