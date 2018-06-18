import React from 'react';

const Task = (props) => (
  <div className="widget__item">
    <p className="widget__item--unchecked">{props.taskText}</p>
    <button
      className="button button--remove" 
      onClick={(e) => {
        //props.handleDeleteTask(props.taskText);
        e.target.parentElement.firstChild.className = 'widget__item--checked';
        e.target.className = 'button button--checked';
      }}
    >
    </button>
  </div>
);

export default Task;