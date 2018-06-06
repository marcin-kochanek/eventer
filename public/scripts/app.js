'use strict';

console.log('To-Do List App is running!');

var appRoot = document.getElementById('app');
var app = {
  title: 'To-Do List',
  subtitle: 'Put your life in the hands of a computer.',
  tasks: []
};
var onFormSubmit = function onFormSubmit(e) {
  //zapobiega domyślnym ustawieniom, czyli łączeniu się ze wskazanym adresem oraz przeładowaniu się strony 
  e.preventDefault();

  var task = e.target.elements.task.value;
  if (task) {
    app.tasks.push(' ' + task);
    e.target.elements.task.value = '';
    renderToDoApp();
  }
};

var onRemoveAllOptions = function onRemoveAllOptions() {
  app.tasks = [];
  renderToDoApp();
};

var addNewOption = function addNewOption(array) {
  return array.map(function (task, index) {
    return React.createElement(
      'li',
      { key: index },
      task
    );
  });
};

var onPickTask = function onPickTask() {
  var randomNumber = Math.floor(Math.random() * app.tasks.length);
  var pickedOption = app.tasks[randomNumber];
  alert(pickedOption);
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
    app.tasks && app.tasks.length > 0 ? 'Here are your tasks:' : 'No tasks',
    React.createElement(
      'p',
      null,
      'The number of tasks: ',
      app.tasks.length
    ),
    React.createElement(
      'button',
      { disabled: app.tasks.length === 0, onClick: onPickTask },
      'What should I do first?'
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAllOptions },
      'Remove all'
    ),
    React.createElement(
      'ol',
      null,
      addNewOption(app.tasks)
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'task' }),
      React.createElement(
        'button',
        null,
        'Add task'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderToDoApp();
