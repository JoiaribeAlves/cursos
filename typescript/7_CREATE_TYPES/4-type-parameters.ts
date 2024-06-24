function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${key} está presente no objeto e tem o valor ${obj[key]}`;
}

const server = {
  hd: "2TB",
  ram: "32GB",
}

console.log(getSomeKey(server, "ram"));
