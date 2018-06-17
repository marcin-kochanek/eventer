import React from 'react';

const Action = (props) => (
  <div>
    <button 
      onClick={props.handlePick}
      disabled={!props.hasTasks}
    >
      What should I do first?
    </button>
  </div>
);

export default Action;