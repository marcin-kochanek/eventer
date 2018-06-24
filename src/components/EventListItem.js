import React from 'react';
import { connect } from 'react-redux';
import { removeEvent } from '../actions/events';

const EventListItem = ((event) => (
  <div>
    <li> 
      <h3>Title: {event.title}</h3>
      <p>Description: {event.description}</p>
      <p>Location: {event.location}</p>
      <p>Fee: {event.fee} PLN</p>
      <p>Created at: {event.createdAt}</p>
      <button onClick={() => {
        event.dispatch(removeEvent(event.id));
      }}>X</button>
    </li>
  </div>
));

export default connect()(EventListItem);
