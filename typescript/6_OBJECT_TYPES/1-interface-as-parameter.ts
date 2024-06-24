interface ProductProps {
  name: string;
  price: number;
  isAvailable: boolean;
}

function productDetails(product: ProductProps) {
  if (product.isAvailable) {
    console.log(`O produto ${product.name} custa ${product.price}`);
  } else {
    console.log(`O produto ${product.name} não está disponível`);
  }
}

const shirts: ProductProps = {
  name: "Camiseta gola polo",
  price: 59.9,
  isAvailable: true,
}

productDetails(shirts);

interface User {
  name: string;
  email: string;
  username?: string;
}

function userDetails(user: User) {
  if (!user.username) {
    console.log(`O usuário ${user.name} não possui nome de usuário`);
  }
}

const user1: User = {
  name: "Joiaribe",
  email: "joiaribe@gmail.com",
}

const user2: User = {
  name: "Amanda",
  email: "amanda@gmail.com",
  username: "amandinha",
}

userDetails(user1);
userDetails(user2);
