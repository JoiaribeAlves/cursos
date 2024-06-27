function Max(limit: number) {
  return function(target: Object, propertyKey: string) {
    let value: string;

    const getter = function() {
      return value;
    }

    const setter = function(newValue: string) {
      if (newValue.length > limit) {
        console.error(`O valor deve ter no máximo ${limit} caracteres`);
        return;
      } else {
        value = newValue;
      }
    }

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter
    });
  }
}

class Admin {
  @Max(10)
  username

  constructor(username: string) {
    this.username = username;
  }
}

const pedro = new Admin("pedro123456");
