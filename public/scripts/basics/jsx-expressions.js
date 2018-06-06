'use strict';

// JSX - JavaScript XML
// rozszerzenie składni języka JavaScript, który ułatwia pisanie kodu komponentów w React (tak jak np. SCSS jest rozszerzeniem składni dla CSS)

//////////////////
// JS Expressions

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'To-Do List App'
  ),
  React.createElement(
    'p',
    null,
    'Shopping list:'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var userName = 'Marcin';
var userAge = 27;
var userLocation = 'Wrocław';
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    userName.toUpperCase() + ' Kochanek'
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    userAge
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    userLocation
  )
);

var user = {
  name: 'Aleksandra',
  age: 24,
  location: 'Brynica'
};
var templateThree = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name + ' Pawłowicz'
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  )
);

var app = {
  title: 'To-Do List',
  subtitle: 'React App'
};
var templateFour = React.createElement(
  'div',
  null,
  React.createElement(
    'h2',
    null,
    app.title
  ),
  React.createElement(
    'h2',
    null,
    app.subtitle
  )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateFour, appRoot);
