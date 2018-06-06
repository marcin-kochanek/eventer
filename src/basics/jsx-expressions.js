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

var appRoot = document.getElementById('app');
ReactDOM.render(templateFour, appRoot);