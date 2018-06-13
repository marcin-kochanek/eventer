class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteTasks = this.handleDeleteTasks.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      subtitle: 'Put your life in the hands of a computer.',
      tasks: props.tasks
    };
  }
  handleDeleteTasks() {
    this.setState(() => {
      return {
        tasks: []
      };
    });
  }
  handlePick() {
    const randomNumber = Math.floor(Math.random() * (this.state.tasks.length));
    const pickedTask = this.state.tasks[randomNumber];
    alert(pickedTask);
  }
  handleAddOption(task) {
    if (!task) {
      return 'Enter valid value to add item';
    } else if (this.state.tasks.indexOf(task) > -1) {
      return 'This task already exists';
    }

    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.concat(task)
      };
    });
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
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

ToDoApp.defaultProps = {
  tasks: []
};

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
      <button onClick={props.handleDeleteTasks}>Remove all</button>
      {
        props.tasks.map(task => <Option key={task} taskText={task} />)
      }
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.taskText}
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) { 
    e.preventDefault(); 
  
    const task = e.target.elements.task.value.trim();
    const error = this.props.handleAddOption(task);

    this.setState(() => {
      return { error };
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="task" />
          <button>Add task</button>
        </form>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// }

ReactDOM.render(<ToDoApp />, document.getElementById('app')); 