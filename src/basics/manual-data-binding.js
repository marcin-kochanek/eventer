console.log('App.js is running!');

//////////////////
// Manual data binding

let counter = 0;
const addOne = () => {
  counter++;
  renderCounterApp();
  console.log('addOne');
};
const minusOne = () => {
  counter--;
  renderCounterApp();
  console.log('minusOne')
};
const resetCounter = () => {
  counter = 0;
  renderCounterApp();
  console.log('resetCounter')
};

const appRoot = document.getElementById('app');

// tymczasowe rozwizanie, ktre ma pokazac dzialanie i logike React
// stworzenie funkcji, ktora bedzie sprawiala, ze nasz template bedzie na nowo renderowany z aktualizowana wartoscia zmiennej counter
const renderCounterApp = () => {
  const template = (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetCounter}>reset</button>
    </div>
  );

  ReactDOM.render(template, appRoot);
};
renderCounterApp();