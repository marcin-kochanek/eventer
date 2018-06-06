// przy użyciu var możemy na nawo zadeklarować zmienną - parser JS nie zwróci nam błędu, co może doprowadzić do pomyłkowego nadpisania zmiennej,a w konsekwencji do bugów
var varName = 'Marcin';
var varName = 'Kuba';
console.log('varName', varName);

// przy użyciu let możemy nadać inną wartość zmiennej, lecz NIE MOŻEMY jej na nowo zadeklarować
let letName = 'Marcin';
letName = 'Kuba';
//let letName = 'Jacek'; ERROR
console.log('letName', letName);

// przy użyciu const NIE MOŻEMY nadać innej wartości zadeklarowanej już zmiennej oraz NIE MOŻEMY jej na nowo zadeklarować
const constName = 'Marcin';
//const constName = 'Jacek'; ERROR
//constName = 'Adam'; ERROR
console.log('constName', constName);


// var, let and const are function-scoped
function getPetName() {
  var petName = 'Burek';
  return petName;
}
getPetName();
//console.log(petName); //petName is not defined, ponieważ zmienna nie jest dostępna poza scopem danej funkcji, gdzie została zadeklarowana

function getPetName() {
  const petName = 'Burek';
  return petName;
}
const petName = getPetName();
console.log(petName); // zwraca 'Burek', bo chcemy mieć dostęp do zmiennej zadeklarowanej poza funkcją

// ONLY let and const are block-scoped
const fullName = 'Marcin Kochanek';

if (fullName) {
  var firstName = fullName.split(' ')[0];
  console.log(firstName); //Marcin
}
console.log(firstName); //wyświetli Marcin, bo zmienna firstName nie została zadeklarowana w funkcji

if (fullName) {
  const firstName = fullName.split(' ')[0];
  console.log(firstName); //Marcin
}
console.log(firstName); //firstName is not defined, ponieważ zmienna ta została zadeklarowana w bloku instrukcji warunkowej

let firstName;
if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName); //Marcin
}
console.log(firstName); //Marcin, ponieważ zmienna ta została zadeklarowana w zasięgu globalnym, a nie w bloku instrukcji warunkowej





