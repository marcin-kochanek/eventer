// class declaration
class Person {
  // constructor function, która zostaje wywołana w sposób dyskretny, gdy tworzymy instancje
  // zastosowanie nowej możliwości ES6, czyli wartości defaultowych, gdy np. nie zostanie podany dany argument
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return this.age === 1 ? `${this.name} is ${this.age} year old.` : `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    // aby ustawić nową właściwość i zostawić stare z klasy Person musimy wywołać funkcję constructor należącą do rodzica/klasy Person poprzez funkcję super()
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    // wywołanie metody z klasy Person i przypisanie zwróconej wartości do zmiennej description
    const description = super.getDescription();
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    const greeting = super.getGreeting();

    return this.homeLocation ? `${greeting} I'm visiting from ${this.homeLocation}.` : `${greeting}`;
  }
}

// creating instances of the class where we can define what each Person looks like
const me = new Traveler('Marcin Kochanek', 27, 'Wrocław');
console.log(me.getGreeting());

// wartość zmiennej name przyjmuje wartość defaultową, a więc 'Anonymous'
const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGreeting());