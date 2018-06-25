import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const EventListItem = ((event) => (
  <div>
    <li> 
      <Link to={`/edit/${event.id}`}>
        <h3>{event.title}</h3>
      </Link>
      <p>{event.description}</p>
      <p>Location: {event.location}</p>
      <p>Fee: {event.fee} PLN</p>
      <p>Created at: {moment(event.createdAt).format('Do MMMM, YYYY')}</p>
    </li>
  </div>
));

export default EventListItem;
