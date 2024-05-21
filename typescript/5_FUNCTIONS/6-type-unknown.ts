function doSomething(x: unknown) {
  if (Array.isArray(x)) {
    console.log(x[0]);
  } else if (typeof x === "number") {
    console.log("x é um número");
  } else if (typeof x === "string") {
    console.log("x é uma string");
  } else {
    console.log("x é inválido");
  }
}

doSomething(4);
doSomething("3");
doSomething([0, 1, 2, 3]);
doSomething({});
