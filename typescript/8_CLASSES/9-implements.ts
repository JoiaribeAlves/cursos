interface IShowTitle {
  itemTitle(): string;
}

class BlogPost implements IShowTitle {
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  itemTitle(): string {
    return this.title;
  }
}

const post1 = new BlogPost("Curso de Typescript");
console.log(post1.itemTitle());
