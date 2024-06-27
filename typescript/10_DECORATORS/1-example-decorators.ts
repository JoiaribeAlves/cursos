function myDecorator() {
  console.log("Iniciando decorator");

  return function(target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor) {
    console.log("Executando decorator");
    console.log(target);
    console.log(propertyKey);
    console.log(propertyDescriptor);
  }
}

class MyClass {
  @myDecorator()
  teste() {
    console.log("Iniciando execução do método");
  }
}

const myObj = new MyClass();
myObj.teste();
