class Private {
  private name = "Joiaribe";

  show() {
    console.log(this.name);
  }
}

const privateObj = new Private();

privateObj.show();
