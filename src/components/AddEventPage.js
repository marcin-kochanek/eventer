import React from 'react';
import { connect } from 'react-redux';

import EventForm from './EventForm';
import { addEvent } from '../actions/events';

const AddEventPage = (props) => (
  <div>
    <h1>Add Event</h1>
    <EventForm 
      onSubmit={(event) => {
        props.dispatch(addEvent(event));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddEventPage);