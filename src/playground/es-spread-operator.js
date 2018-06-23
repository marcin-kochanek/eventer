// Reducers nigdy nie powinnien zmieniać stanu aplikacji

// ARRAY
const names = ['Adam', 'Ola'];
console.log(`Stan aplikacji: ${names}`);

// metoda push()
// zmienia tablicy names, a więc nie używaj tej metody
console.log(names.push('Marcin'));
console.log(`Obecny stan aplikacji, po użyciu metody push(), zmieni tablicę na: ${names}`);
names.pop(); // przywróć do pierwotnego stanu
console.log('----------');

// metoda concat()
// nie zmienia tablicy names, a więc jest to dobra metoda
console.log(names.concat('Marcin'));
console.log(`Obecny stan aplikacji, po użyciu metody concat(), pozostaje bez zmian: ${names}`);
console.log('----------');

// spread operator
// użycie spread operator również nie zmieni tablicy names, a więc jest to najlepsze rozwiązanie
console.log([...names, 'Marcin']);
console.log(`Obecny stan aplikacji, po użyciu spread operatora, pozostaje bez zmian: ${names}`);
console.log('----------');

// OBJECT
const user = {
  name: 'Kuba',
  age: 26
};

//użycie spread operatora dla obiektów jest możliwe dopiero po zainstalowaniu pluginu dla babela
// nadpisanie właściwości age z obiektu user przez właściwość age: 22
console.log({
  ...user,
  location: 'Warsaw',
  age: 22
});

//nadpisanie właściwości age: 29 przez taką właściwość z obiektu user
console.log({
  age: 29,
  ...user,
  location: 'Warsaw'
});