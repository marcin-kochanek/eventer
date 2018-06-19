import React from 'react';
import AddTask from './AddTask';
import Action from './Action';
import Header from './Header';
import Tasks from './Tasks';
import TaskModal from './TaskModal';
import WidgetHeader from './WidgetHeader';

export default class ToDoApp extends React.Component {
  state = {
    tasks: [],
    chosenTask: undefined
  };
  handleDeleteTasks = () => {
    localStorage.clear();

    this.setState(() => ({ tasks: [] }));
  };
  handleDeleteTask = (taskToRemove) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => taskToRemove !== task )}));
  };
  handlePick = () => {
    const randomNumber = Math.floor(Math.random() * (this.state.tasks.length));
    const pickedTask = this.state.tasks[randomNumber];
    
    this.setState(() => ({
      chosenTask: pickedTask
    }));
  };
  handleAddTask = (task) => {
    if (!task) {
      return 'Enter valid value to add item';
    } else if (this.state.tasks.indexOf(task) > -1) {
      return 'This task already exists';
    }

    this.setState((prevState) => ({ tasks: prevState.tasks.concat(task) }));
  };
  handleCloseModal = () => {
    this.setState(() => ({ chosenTask: false }));
  };
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
  render() {
    return (
      <div className="container">
        <Header subtitle={this.state.subtitle}/>
        <div className="app">
          <div className="app-container">
            <div>
              <WidgetHeader />
              <AddTask 
                handleAddTask={this.handleAddTask}
              />
              <Tasks 
                tasks={this.state.tasks}
                handleDeleteTasks={this.handleDeleteTasks}
                handleDeleteTask={this.handleDeleteTask}
              />
            </div>
            <Action 
              hasTasks={(this.state.tasks.length > 0)}
              handlePick={this.handlePick}
            />
            <TaskModal 
              chosenTask={this.state.chosenTask}
              handleCloseModal={this.handleCloseModal}
              handleAddTask={this.handleAddTask}
            />
          </div>
        </div>
      </div>
    );
  }
}