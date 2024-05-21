function error(message: string): never {
  throw new Error(message);
}

error("Erro fatal!");
