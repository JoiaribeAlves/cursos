class StaticMembers {
  public static prop = "static";

  public static staticMethod() {
    return "Eu sou um método estático";
  }
}

console.log(StaticMembers.prop);
console.log(StaticMembers.staticMethod());
