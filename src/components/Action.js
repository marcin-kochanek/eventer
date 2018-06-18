import React from 'react';

const Action = (props) => (
  <div className="action-container">
    <button 
      onClick={props.handlePick}
      disabled={!props.hasTasks}
      className="button button--action"
    >
      What should I do first?
    </button>
  </div>
);

export default Action;