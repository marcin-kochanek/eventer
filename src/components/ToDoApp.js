import React from 'react';
import AddTask from './AddTask';
import Action from './Action';
import Header from './Header';
import Tasks from './Tasks';

export default class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteTasks = this.handleDeleteTasks.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.state = {
      subtitle: 'Put your life in the hands of a computer.',
      tasks: []
    };
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
  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks.length !== this.state.tasks.length) {
      const json = JSON.stringify(this.state.tasks);
      localStorage.setItem('tasks', json);
    }
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
  render() {
    return (
      <div>
        <Header subtitle={this.state.subtitle}/>
        <Action 
          hasTasks={(this.state.tasks.length > 0)}
          handlePick={this.handlePick}
        />
        <Tasks 
          tasks={this.state.tasks}
          handleDeleteTasks={this.handleDeleteTasks}
          handleDeleteTask={this.handleDeleteTask}
        />
        <AddTask 
          handleAddTask={this.handleAddTask}
        />
      </div>
    );
  }
}