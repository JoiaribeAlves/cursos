const username: string = "Joiaribe";
const email: typeof username = "joiaribe@example.com";
// const age: typeof username = 40; error

type X = typeof username;
const password: X = "secret";
