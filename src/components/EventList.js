import React from 'react';
import { connect } from 'react-redux';

import EventListItem from './EventListItem';
import selectEvents from '../selectors/events';

const EventList = (props) => (
  <div>
    <h1>Event List</h1>
    <ul>
      {
        props.events.map((event) => {
          return (
            <EventListItem 
              key={event.id}
              title={event.title}
              fee={event.fee}
              description={event.description}
              id={event.id}
              location={event.location}
              createdAt={event.createdAt}
            />
          )
        })
      }
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  return {
    events: selectEvents(state.events, state.filters)
  };
};

export default connect(mapStateToProps)(EventList);