console.log('App.js is running!');

//////////////////
// Forms and Inputs

const appRoot = document.getElementById('app');
const app = {
  title: 'To-Do List',
  subtitle: 'Put your life in the hands of a computer.',
  options: []
};
const onFormSubmit = (e) => {
  //zapobiega domyślnym ustawieniom, czyli łączeniu się ze wskazanym adresem oraz przeładowaniu się strony 
  e.preventDefault(); 

  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(` ${option}`);
    e.target.elements.option.value = '';
    renderToDoApp();
  }
};

const onRemoveAllOptions = () => {
  app.options = [];
  renderToDoApp();
};

const renderToDoApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {(app.options && app.options.length > 0) ? 'Here are your options: ' + app.options : 'No options'}
      <p>Options length: {app.options.length}</p>
      <button onClick={onRemoveAllOptions}>Remove all</button>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderToDoApp();