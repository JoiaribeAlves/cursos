class Base1 {
  someMethod() {
    console.log("Uma frase qualquer");
  }
}

class Base2 extends Base1 {
  someMethod(): void {
    console.log("Sobrescrevi o método de Base 1");
  }
}

const result = new Base2();
result.someMethod();
