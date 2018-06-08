class ToDoApp extends React.Component {
  render() {
    const title = 'To-Do App';
    const subtitle = 'Put your life in the hands of a computer.';
    const tasks = ['Thing one', 'Thing two', 'Thing four'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options tasks={tasks}/>
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handle pick');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do first?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  handleRemoveAll() {
    console.log(this.props.tasks);
    // alert('remove all');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove all</button>
        {
          this.props.tasks.map(task => <Option key={task} taskText={task} />)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.taskText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e) { 
    e.preventDefault(); 
  
    const task = e.target.elements.task.value.trim();
    if (task) {
      alert(task);
      e.target.elements.task.value = '';
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="task" />
          <button>Add task</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<ToDoApp />, document.getElementById('app')); 