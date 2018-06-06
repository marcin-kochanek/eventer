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

const user = {
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

const app = {
  title: 'To-Do List',
  subtitle: 'React App'
};
const templateFour = (
  <div>
    <h2>{app.title}</h2>
    <h2>{app.subtitle}</h2>
  </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(templateFour, appRoot);