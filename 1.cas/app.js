// // function User(ime, prezime) {
// //   this.ime = ime;
// //   this.prezime = prezime;
// // }
// // const bakir = new User("Bakir", "Ujkanovic");

// // console.log(bakir);

// class Person {
//   //   ime = "Default";
//   //   prezime;
//   //   godine;

//   constructor(ime, prezime, brgod) {
//     this.ime = ime;
//     this.prezime = prezime;
//     this.godine = brgod;
//   }

//   imeprezime() {
//     return `${this.ime} ${this.prezime}`;
//   }
// }
// const person1 = new Person();
// const person2 = new Person("aladin", "zecic", 19);
// console.log(person1);
// console.log(person2);
// console.log(person2.imeprezime()); //person2 moze pristupiti bilo kojoj metodi iz klase person (koja je napravljena na standardan nacin)

class Product {
  static increase = 1.1;
  constructor(name, price, desc, weight) {
    this.name = name;
    this.price = price;
    this.description = desc;
    this.weight = weight;
  }
  static increasePrice() {
    console.log(
      `ova metode ce povecati cenu naseg produkta za 10 posto tako sto cemo trenutnu pomnozii sa ${this.increase}`
    );
  }
}

const socks = new Product("carape", 120, "100% cotton", 50);
console.log(socks);

console.log(Product.increase);
console.log(Product.increasePrice());
//Ne mozemo pristupiti statickoj metodi iz objekta vec samo direktno preko klase

class Person {
  constructor(ime, prezime, godine, pol) {
    this.ime = ime;
    this.prezime = prezime;
    this.godine = godine;
    this.pol = pol;
  }
  getinfo() {
    console.log(`${this.ime} ${this.prezime} ima ${this.godine}`);
  }
}
const person3 = new Person("aladin", "zecic", 19, "m");
console.log(person3);
console.log(person3.getinfo());

class Student extends Person {
  constructor(ime, prezime, godine, pol, index, godinaStudija) {
    super(ime, prezime, godine, pol);
    this.index = index;
    this.godinaStudija = godinaStudija;
  }

  getinfo() {
    console.log(
      `${this.ime} ${this.prezime} ima ${this.godine} trenutno je na ${this.godinaStudija} godini studija`
    );
  }
}

const student = new Student("amer", "honic", 19, "m", 12321, 1, 7.88);
console.log(student);
console.log(student.getinfo());
