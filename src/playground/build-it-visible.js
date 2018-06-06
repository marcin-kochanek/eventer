const appRoot = document.getElementById('app');
const text = 'Hey! There are some details you can see now.';
let visibility = false;

const showDetails = () => {
  visibility = !visibility;

  renderApp();
};

const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={showDetails}>{visibility ? 'Hide details' : 'Show details'}</button>
      {visibility ? <p>{text}</p> : ''}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();