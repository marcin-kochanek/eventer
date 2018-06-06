'use strict';

console.log('App.js is running!');

//////////////////
// Forms and Inputs

var appRoot = document.getElementById('app');
var app = {
  title: 'To-Do List',
  subtitle: 'Put your life in the hands of a computer.',
  options: []
};
var onFormSubmit = function onFormSubmit(e) {
  //zapobiega domyślnym ustawieniom, czyli łączeniu się ze wskazanym adresem oraz przeładowaniu się strony 
  e.preventDefault();

  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(' ' + option);
    e.target.elements.option.value = '';
    renderToDoApp();
  }
};

var onRemoveAllOptions = function onRemoveAllOptions() {
  app.options = [];
  renderToDoApp();
};

var renderToDoApp = function renderToDoApp() {
  var template = React.createElement(
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
    app.options && app.options.length > 0 ? 'Here are your options: ' + app.options : 'No options',
    React.createElement(
      'p',
      null,
      'Options length: ',
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAllOptions },
      'Remove all'
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
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderToDoApp();
