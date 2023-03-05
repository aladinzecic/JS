//Osnovni principi objektno orjentisanog programiranja:

//1.Enkapsulacija
//Princip skrivanja informacija i funkcionalnosti objekta i pruzanje jednostavnog i jasnog interfejsa za rad sa tim objektom

//2.Nasledjivanje(Inheritance)
//Ovaj pricnip nam omogucava kreiranje novih klasa na osnovu postojecih
//Samim tim se nasledjuju sve funkcionalnosti postojecih klasa

//3.Polimorfizam
//Ovaj princip nam omogucava koriscenje istog koda sa razlicitim tipovima objekata

//4.Apstrakcija
//Omogucava nam da izolujemo i identifikujemo bitne karakteristike objekta a da zanemarimo manje bitne

class Person {
  #ime;
  #prezime;
  constructor(ime, prezime, god) {
    this.#ime = ime;
    this.#prezime = prezime;
    this.godine = god;
  }
  #getInfo() {
    console.log(`${this.#ime} ${this.#prezime} ima ${this.godine} godina`);
  }
  get fullname() {
    console.log(`${this.#ime} ${this.#prezime}`);
  }
  set changeName(newName) {
    this.#ime = newName;
  }
}
//Privatna metoda getinfo ce prikazati ime i prezime jer se nalazi unutar klase person
//get metoda nam sluzi za prikazivanje nekih svojstava koja su privatna unutar klase
//set metoda nam sluzi za promenu nekih svojstava koja su privatna unutar klase
const person1 = new Person("hatidza", "mahmutovic", 17);
console.log(person1);
//console.log(person1.getInfo());
console.log(person1.fullname); //izostavljamo zagrade na kraju za razliku od funkcija
person1.changeName = "Miona";
console.log(person1.fullname);

//Polimorfizam primer

class Oblik {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  povrsina() {
    return 0;
  }
}

class pravougaonik extends Oblik {
  constructor(x, y, a, b) {
    super(x, y);
    this.a = a;
    this.b = b;
  }
  povrsina() {
    return this.a * this.b;
  }
}

class krug extends Oblik {
  constructor(x, y, r) {
    super(x, y);
    this.r = r;
  }
  povrsina() {
    return this.r * this.r * Math.PI;
  }
}
const krug1 = new krug(0, 0, 3);
console.log(krug1.povrsina());

function izracunajPovrsinu(oblik) {
  //polimorfna funkcija koju mozemo koristiti za razl tipove objekata
  return oblik.povrsina();
}
console.log(izracunajPovrsinu(krug1));

class Course {
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }
}
const Math1 = new Course("Math", 200, 1000);
const Phisics = new Course("Phisics", 250, 1200);
console.log(Math1);
console.log(Phisics);
