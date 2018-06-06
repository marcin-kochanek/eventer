'use strict';

//////////////////////////
// Conditional Rendering
// if statements, ternary operators, logical '&&' operator

var user = {
  name: 'Aleksandra',
  age: 24
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
var templateFive = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
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
    getLocation(user.location)
  )
);

// jeśli lokalizacja występuje to zwróć ją w elemencie p
function getLocation2(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}
var templateSix = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation2(user.location)
);

var app = {
  title: 'To-Do List',
  subtitle: 'React App'
  //options: ['One', 'Two']
};

var templateSeven = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  app.options && app.options.length > 0 ? 'Here are your options: ' + app.options : 'No options'
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateSeven, appRoot);
