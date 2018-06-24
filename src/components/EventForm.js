import React from 'react';

export default class EventForm extends React.Component {
  state = {
    description: ''
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => { description });
  };
  render() {
    return (
      <div>
        <form>
          <input 
            type='text'
            placeholder='description'
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input 
            type='number'
            placeholder='fee'
          />
          <button>add</button>
        </form>
      </div>
    );
  }
}