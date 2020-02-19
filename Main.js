class Main {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    // const person = new Person("abdu");
    // console.log(person.udskriv());
  }

  greet() {
    return this.name + " " + this.age;
  }
}

const person = new Main("abdu", 21);

console.log(person.greet());

// class Main {
//     constructor(brand) {
//       this.carname = brand;
//     }

//     get cname() {
//       return this.carname;
//     }

//     set cname(x) {
//       this.carname = x;
//     }
//   }

//   mycar = new Main("ford");

//   console.log(mycar.cname);
