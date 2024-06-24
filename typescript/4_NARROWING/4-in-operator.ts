class Dog {
  name
  breed

  constructor(name: string, breed?: string) {
    this.name = name;
    if (breed) {
      this.breed = breed;
    }
  }
}

const dog1 = new Dog("Negão");
const dog2 = new Dog("Belinha", "Poodle");

function showDogInfo(dog: Dog) {
  if ("breed" in dog) {
    console.log(`A raça do cachorro é: ${dog.breed}`);
  } else {
    console.log("A raça do cachorro é: SRD");
  }
}

showDogInfo(dog1);
showDogInfo(dog2);
