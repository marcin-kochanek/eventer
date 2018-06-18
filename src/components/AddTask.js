import React from 'react';

export default class AddTask extends React.Component {
  state = {
    error: undefined
  };
  handleAddTask = (e) => { 
    e.preventDefault(); 
  
    const task = e.target.elements.task.value.trim();
    const error = this.props.handleAddTask(task);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.task.value = '';
    }
  };
  render() {
    return (
      <div className="add-task">
        <form className="add-task__form" onSubmit={this.handleAddTask}>
          <input className="add-task__input" type="text" name="task" placeholder="Here put your task"/>
          <button className="button button--add">+</button>
        </form>
        {this.state.error && <p className="add-task__error">{this.state.error}</p>}
      </div>
    );
  }
}