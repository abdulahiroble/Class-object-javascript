class Person extends Main {
  constructor(name) {
    this.name = name;
    // this.age = age;

    // const name = name;
    // const age = age;
  }

  get getName() {
    return this.name;
  }

  set person(x) {
    this.name = x;
    // this.age = ages;
  }

  udskriv() {
    return "Dit navn er: " + getName();
  }
}
