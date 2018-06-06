'use strict';

console.log('App.js is running!');

//////////////////
// Events and Attributes

var counter = 0;
var addOne = function addOne() {
  counter++;
  renderCounterApp();
  console.log('addOne');
};
var minusOne = function minusOne() {
  counter--;
  renderCounterApp();
  console.log('minusOne');
};
var resetCounter = function resetCounter() {
  counter = 0;
  renderCounterApp();
  console.log('resetCounter');
};

var appRoot = document.getElementById('app');

// tymczasowe rozwizanie, ktre ma pokazac dzialanie i logike React
// stworzenie funkcji, ktora bedzie sprawiala, ze nasz template bedzie na nowo renderowany z aktualizowana wartoscia zmiennej counter
var renderCounterApp = function renderCounterApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      counter
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: resetCounter },
      'reset'
    )
  );

  ReactDOM.render(template, appRoot);
};
renderCounterApp();
