import React from 'react';

const Task = (props) => {
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

export default Task;