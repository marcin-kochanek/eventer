import React from 'react';
import { connect } from 'react-redux';

import EventForm from './EventForm';
import { editEvent, removeEvent } from '../actions/events';

const EditEventPage = (props) => {
  console.log(props);
  return (
    <div>
      <EventForm
        event={props.event}
        onSubmit={(event) => {
          props.dispatch(editEvent(props.event.id, event));
          props.history.push('/');
        }}
      />
      <button onClick={(event) => {
        props.dispatch(removeEvent(props.event.id));
        props.history.push('/');
      }}>X</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    event: state.events.find((event) => event.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditEventPage);