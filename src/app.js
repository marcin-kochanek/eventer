console.log('To-Do List App is running!');

const appRoot = document.getElementById('app');
const app = {
  title: 'To-Do List',
  subtitle: 'Put your life in the hands of a computer.',
  tasks: []
};
const onFormSubmit = (e) => {
  //zapobiega domyślnym ustawieniom, czyli łączeniu się ze wskazanym adresem oraz przeładowaniu się strony 
  e.preventDefault(); 

  const task = e.target.elements.task.value;
  if (task) {
    app.tasks.push(` ${task}`);
    e.target.elements.task.value = '';
    renderToDoApp();
  }
};

const onRemoveAllOptions = () => {
  app.tasks = [];
  renderToDoApp();
};

const addNewOption = (array) => {
  return array.map((task, index) => <li key={index}>{task}</li>);
};

const onPickTask = () => {
  const randomNumber = Math.floor(Math.random() * app.tasks.length);
  const pickedOption = app.tasks[randomNumber];
  alert(pickedOption);
};

const renderToDoApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {(app.tasks && app.tasks.length > 0) ? 'Here are your tasks:': 'No tasks'}
      <p>The number of tasks: {app.tasks.length}</p>
      <button disabled={app.tasks.length === 0} onClick={onPickTask}>What should I do first?</button>
      <button onClick={onRemoveAllOptions}>Remove all</button>
      <ol>
        {addNewOption(app.tasks)}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="task"/>
        <button>Add task</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderToDoApp();