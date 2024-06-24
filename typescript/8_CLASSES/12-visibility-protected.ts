class Protected {
  protected x = 15;
}

class ExProtected extends Protected {
  showX() {
    console.log(this.x);
  }
}

const protectedInstance = new ExProtected();
protectedInstance.showX();
