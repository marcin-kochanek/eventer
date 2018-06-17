import React from 'react';
import Task from './Task';

const Tasks = (props) => (
  <div>
    <button onClick={props.handleDeleteTasks}>
      Remove all
    </button>
    {props.tasks.length === 0 && <p>Please add an option to get started!</p>}
    {
      props.tasks.map(task => (
        <Task
          key={task} 
          taskText={task}
          handleDeleteTask={props.handleDeleteTask}
        />
      ))
    }
  </div>
);

export default Tasks;