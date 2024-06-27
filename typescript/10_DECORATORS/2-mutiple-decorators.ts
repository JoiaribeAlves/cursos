function decorator1() {
  return function (property: any, propertyKey: string, propertyDescriptor: PropertyDescriptor) {
    console.log("Executando decorator 1");
  }
}

function decorator2() {
  return function (property: any, propertyKey: string, propertyDescriptor: PropertyDescriptor) {
    console.log("Executando decorator 2");
  }
}

class MultipleDecorators {
  @decorator1()
  @decorator2()
  teste() {
    console.log("Executando teste");
  }
}

const multipleDecorators = new MultipleDecorators();
multipleDecorators.teste();
