function formatNumber() {
  return function (target: Object, propertyKey: string) {
    let value: string;

    const getter = function () {
      return value;
    }

    const setter = function (newValue: string) {
      value = newValue.padStart(5, "0");
    }

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter
    });
  }
}

class ID10_6 {
  @formatNumber()
  id

  constructor(id: string) {
    this.id = id;
  }
}

const newId = new ID10_6("123");
console.log(newId.id);
