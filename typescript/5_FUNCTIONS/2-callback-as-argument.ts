function greeting(name: string): string {
  return `Olá, ${name}`;
}

function preGreeting(fn: (name: string) => string, username: string) {
  console.log("Preparando...");

  const greet = fn(username);

  console.log(greet);
}

preGreeting(greeting, "Joiaribe");
