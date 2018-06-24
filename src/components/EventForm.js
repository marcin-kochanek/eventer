import React from 'react';

export default class EventForm extends React.Component {
  state = {
    description: '',
    fee: ''
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onFeeChange = (e) => {
    const fee = e.target.value;
    if (fee.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ fee }));
    }
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
            type='text'
            placeholder='fee'
            value={this.state.fee}
            onChange={this.onFeeChange}
          />
          <button>add</button>
        </form>
      </div>
    );
  }
}