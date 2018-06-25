import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// change the date format from mm/dd/yyyy to dd/mm/yyyy  
moment.updateLocale('en', {
  longDateFormat: {
    L: 'DD/MM/YYYY'
  }
});

export default class EventForm extends React.Component {
  state = {
    title: this.props.event ? this.props.event.title : '',
    description: this.props.event ? this.props.event.description : '',
    organiser: this.props.event ? this.props.event.organiser : '',
    location: this.props.event ? this.props.event.location : '',
    fee: this.props.event ? (this.props.event.fee).toString() : '',
    createdAt: this.props.event ? moment(this.props.event.createdAt) : moment(),
    calendarFocused: false,
    error: ''
  };
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onOrganiserChange = (e) => {
    const organiser = e.target.value;
    this.setState(() => ({ organiser }));
  };
  onLocationChange = (e) => {
    const location = e.target.value;
    this.setState(() => ({ location }));
  };
  onFeeChange = (e) => {
    const fee = e.target.value;
    if (!fee || fee.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ fee }));
    }
  };
  onDateChange = (createdAt) => {
  console.log('dldl', this.state.createdAt);
  console.log(moment(this.state.createdAt).format('DD MM YYYY'));

    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.title || !this.state.description || !this.state.fee || !this.state.organiser || !this.state.location) {
      this.setState(() => ({ error: 'Please provide necessary information' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        title: this.state.title,
        description: this.state.description,
        organiser: this.state.organiser,
        location: this.state.location,
        fee: parseFloat(this.state.fee),
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input 
            type='text'
            placeholder='title'
            autoFocus
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <input 
            type='text'
            placeholder='description'
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input 
            type='text'
            placeholder='organiser'
            value={this.state.organiser}
            onChange={this.onOrganiserChange}
          />
          <input 
            type='text'
            placeholder='location'
            value={this.state.location}
            onChange={this.onLocationChange}
          />
          <input 
            type='text'
            placeholder='fee'
            value={this.state.fee}
            onChange={this.onFeeChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
          />
          <button>submit</button>
        </form>
      </div>
    );
  }
}