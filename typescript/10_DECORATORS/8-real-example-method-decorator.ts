function checkIfUserPosted() {
  return function (target: Object, key: string | Symbol, descriptor: PropertyDescriptor) {
    const childFunction = descriptor.value;

    descriptor.value = function (...args: any[]) {
      if (args[1] === true) {
        console.error("Usuário já postou");
      } else {
        return childFunction(this, args);
      }
    }
    return descriptor;
  }
}

class Post10_8 {
  alreadyPosted = false;

  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true;
    console.log(`Post do usuário: ${content}`);
  }
}

const newPost = new Post10_8();
newPost.post("Meu primeiro post", newPost.alreadyPosted);
newPost.post("Meu segundo post", newPost.alreadyPosted);
