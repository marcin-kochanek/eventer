console.log('This is the learining part.');
console.log('App.js is running!');

// JSX - JavaScript XML
// rozszerzenie składni języka JavaScript, który ułatwia pisanie kodu komponentów w React (tak jak np. SCSS jest rozszerzeniem składni dla CSS)

//////////////////
// JS Expressions

const template = (
  <div>
    <h1>To-Do List App</h1>
    <p>Shopping list:</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

const userName = 'Marcin';
const userAge = 27;
const userLocation = 'Wrocław';
const templateTwo = (
  <div>
    <h1>{userName.toUpperCase() + ' Kochanek'}</h1>
    <p>Age: {userAge}</p>
    <p>Location: {userLocation}</p>
  </div>
);

let user = {
  name: 'Aleksandra',
  age: 24,
  location: 'Brynica'
};
const templateThree = (
  <div>
    <h1>{user.name + ' Pawłowicz'}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

let app = {
  title: 'To-Do List',
  subtitle: 'React App'
};
const templateFour = (
  <div>
    <h2>{app.title}</h2>
    <h2>{app.subtitle}</h2>
  </div>
);

//////////////////////////
// Conditional Rendering
// if statements, ternary operators, logical '&&' operator

user = {
  name: 'Aleksandra',
  age: 24,
  //location: 'Brynica'
};
// jeśli lokalizacja występuje to zwróć ją, a jeśli obiekt nie posiada takiej właściwości to zwróć  Unknown
function getLocation(location) {
  if (location) {
    return location;
  } else {
    return 'Unknown';
  }
}
const templateFive = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {getLocation(user.location)}</p>
  </div>
);

// jeśli lokalizacja występuje to zwróć ją w elemencie p
function getLocation2(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}
const templateSix = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation2(user.location)}
  </div>
);

app = {
  title: 'To-Do List',
  subtitle: 'React App',
  //options: ['One', 'Two']
};

const templateSeven = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {(app.options && app.options.length > 0) ? 'Here are your options: ' + app.options : 'No options'}
  </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(templateSeven, appRoot);