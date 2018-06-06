console.log('App.js is running!');

//////////////////
// Events and Attributes

let counter = 0;
const addOne = () => {
  console.log('addOne');
};
const minusOne = () => {
  console.log('minusOne')
};
const resetCounter = () => {
  console.log('resetCounter')
};

const template = (
  <div>
    <h1>Count: {counter}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={resetCounter}>reset</button>
  </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);