import React from 'react';

export default class EventForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input 
            type='text'
            placeholder='description'
            autoFocus
          />
        </form>
      </div>
    );
  }
}