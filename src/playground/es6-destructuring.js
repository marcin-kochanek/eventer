//
// Object destructuring
//

const person = {
  //name: 'Marcin',
  age: 26,
  location: {
    city: 'Opole',
    temp: 20
  }
};

// renaming and setting default value
const { name: firstName = 'Anon', age } = person;
console.log(`${firstName} is ${age}.`);

// renaming
const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}`);
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    //name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName); // Penguin, Self-Published
console.log('-------------------');

//
// Array destructuring
//

const address = ['1 Maja 31b/1', 'Tarnow Opolski', '46-050', 'Opolskie'];
const [street, town, zip, state] = address;
console.log(`You are in ${town}, ${state}`);

const item = ['coffee (hot)', '2zl', '4zl', '7zl'];
const [coffeeName, , mediumPrice] = item;
console.log(`A medium ${coffeeName} costs ${mediumPrice}.`)