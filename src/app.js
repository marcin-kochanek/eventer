console.log('This is the learining part.');
console.log('App.js is running!');

// JSX - JavaScript XML
// rozszerzenie składni języka JavaScript, który ułatwia pisanie kodu komponentów w React (tak jak np. SCSS jest rozszerzeniem składni dla CSS)

//////////////////
// JS Expressions

var template = (
  <div>
    <h1>To-Do List App</h1>
    <p>Shopping list:</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var userName = 'Marcin';
var userAge = 27;
var userLocation = 'Wrocław';
var templateTwo = (
  <div>
    <h1>{userName.toUpperCase() + ' Kochanek'}</h1>
    <p>Age: {userAge}</p>
    <p>Location: {userLocation}</p>
  </div>
);

var user = {
  name: 'Aleksandra',
  age: 24,
  location: 'Brynica'
};
var templateThree = (
  <div>
    <h1>{user.name + ' Pawłowicz'}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var app = {
  title: 'To-Do List',
  subtitle: 'React App'
};
var templateFour = (
  <div>
    <h2>{app.title}</h2>
    <h2>{app.subtitle}</h2>
  </div>
);

//////////////////////////
// Conditional Rendering
// if statements, ternary operators, logical '&&' operator

var user = {
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
var templateFive = (
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
var templateSix = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation2(user.location)}
  </div>
);

var app = {
  title: 'To-Do List',
  subtitle: 'React App',
  //options: ['One', 'Two']
};

var templateSeven = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {(app.options && app.options.length > 0) ? 'Here are your options: ' + app.options : 'No options'}
  </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateSeven, appRoot);