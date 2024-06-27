function enumerable(value: boolean) {
  return function (property: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value
  }
}

class Machine10_4 {
  name

  constructor(name: string) {
    this.name = name;
  }

  @enumerable(false)
  showName() {
    console.log(`O nome da máquina é: ${this.name}`);
  }
}

// @ts-ignore
const trator10_4 = new Machine10_4("Trator verde");
trator10_4.showName();
