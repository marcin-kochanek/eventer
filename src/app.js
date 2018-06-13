class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteTasks = this.handleDeleteTasks.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.state = {
      subtitle: 'Put your life in the hands of a computer',
    };
  }
  handleDeleteTasks() {
    localStorage.clear();

    this.setState(() => ({ tasks: [] }));
  }
  handleDeleteTask(taskToRemove) {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => taskToRemove !== task )})) ;
  }
  handlePick() {
    const randomNumber = Math.floor(Math.random() * (this.state.tasks.length));
    const pickedTask = this.state.tasks[randomNumber];
    alert(pickedTask);
  }
  handleAddTask(task) {
    if (!task) {
      return 'Enter valid value to add item';
    } else if (this.state.tasks.indexOf(task) > -1) {
      return 'This task already exists';
    }

    this.setState((prevState) => ({ tasks: prevState.tasks.concat(task) }));
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('tasks');
      const tasks = JSON.parse(json);

      if (tasks) {
        this.setState(() => ({ tasks }));
      }
    } catch(e) {
      // Do nothing
    }
  }
  componentDidUpdate(prevState) {
    if (prevState.tasks.length !== this.state.tasks.length) {
      const json = JSON.stringify(this.state.tasks);
      localStorage.setItem('tasks', json);
    } else {
      localStorage.clear();
    }
  }
  render() {
    return (
      <div>
        <Header subtitle={this.state.subtitle}/>
        <Action 
          hasOptions={this.state.tasks.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          tasks={this.state.tasks}
          handleDeleteTasks={this.handleDeleteTasks}
          handleDeleteTask={this.handleDeleteTask}
        />
        <AddOption 
          handleAddTask={this.handleAddTask}
        />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'ToDo App'
};

const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do first?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button
        onClick={props.handleDeleteTasks}
      >
        Remove all
      </button>
      {props.tasks.length === 0 && <p>Please add an option to get started!</p>}
      {
        props.tasks.map(task => (
          <Option 
            key={task} 
            taskText={task}
            handleDeleteTask={props.handleDeleteTask}
          />
        ))
      }
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.taskText}
      <button 
        onClick={() => {
          props.handleDeleteTask(props.taskText);
        }}
      >
        remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddTask(e) { 
    e.preventDefault(); 
  
    const task = e.target.elements.task.value.trim();
    const error = this.props.handleAddTask(task);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.task.value = '';
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddTask}>
          <input type="text" name="task" />
          <button>Add task</button>
        </form>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}

ReactDOM.render(<ToDoApp />, document.getElementById('app')); 