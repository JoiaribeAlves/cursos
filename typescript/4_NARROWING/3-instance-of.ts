class User {
  name

  constructor(name: string) {
    this.name = name;
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name);
  }
}

const eu = new User("Joiaribe");
const voce = new SuperUser("Amanda");

console.log(eu);
console.log(voce);

function userGreeting(user: object) {
  if (user instanceof SuperUser) {
    console.log(`Olá ${user.name}, seja bem-vindo(a)! Aceita um cafezinho?`);
  } else if (user instanceof User) {
    console.log(`Olá ${user.name}`);
  }
}

userGreeting(voce);
