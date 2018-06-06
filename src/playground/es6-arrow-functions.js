//es5
function square(x) {
  return x * x;
}
console.log(square(3));

//es6+
const squareArrow = (x) => x * x;
console.log(squareArrow(4));

const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName('Mike Smith'));

////////////////////
//'arguments' object - no longer have access to arguments with arrow functions
function add5(a, b) {
  console.log(arguments);
  return a + b;
}
console.log(add5(5,1));

const add6 = (a, b) => {
  //console.log(arguments); // obiekt arguments nie ejst zdefiniowany
  return a + b;
};
console.log(add6(1,2));

//////////////
//this keyword - different approach

//es5
// aby zadziałało, musimy zmienić kontekts this i przydzielić this do zmiennej, ponieważ każda nowa funkcja definiuje swoją nową wartość this
const user5 = {
  name: 'Marcin',
  cities: ['Opole', 'Wrocław', 'Katowice'],
  printCitiesLived: function() {
    const that = this;
    
    this.cities.forEach(function(city) {
      console.log(`${that.name} has lived in ${city}.`);
    });
  }
};
user5.printCitiesLived();

//es6
// funkcje strzałkowe nie wiążą this (nie posiadają własnego this), zatem this ma taką wartość jaki this w funkcji otaczającej (wartość this kontekstu wykonania)
const user6 = {
  name: 'Marcin',
  cities: ['Opole', 'Wrocław', 'Katowice'],
  printCitiesLived: function() {
    this.cities.forEach((city) => {
      console.log(`${this.name} has lived in ${city}.`);
    });
  }
};
user6.printCitiesLived();

// w tym przykładzie z podwójnym zastosowaniem funkcji strzałkowej wartość this to undefined, ponieważ dotyczy globalnego scopu
const incorrectUser6 = {
  name: 'Marcin',
  cities: ['Opole', 'Wrocław', 'Katowice'],
  printCitiesLived: () => {
    this.cities.forEach((city) => {
      console.log(`${this.name} has lived in ${city}.`);
    });
  }
};
//incorrectUser6.printCitiesLived();

// nowa składnia zapisywania metod w obiektach, która ma charakterystkę funkcji z es5
// forEach nie zwraca żadnej funkcji
// map zwraca nową tablicę, nie wpływając na tablicę cities
const correctUser6 = {
  name: 'Marcin',
  cities: ['Opole', 'Wrocław', 'Katowice'],
  printCitiesLived() {
    this.cities.forEach((city) => {
      console.log(`${this.name} has lived in ${city}.`);
    });
  },
  getCityMessage() {
    return this.cities.map((city) => `${this.name} has lived in ${city} for 10 years.`);
  }
};
correctUser6.printCitiesLived();
console.log(correctUser6.getCityMessage());

const multiplier = {
  numbers: [1, 2, 3, 5, 10],
  multiplyBy: 10,
  getMultipiedNumbers() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};
console.log(multiplier.getMultipiedNumbers());

