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
          return <EventListItem key={event.id} {...event} />
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

//  {...event} - this is the object spread syntax. Without it, you'd have to pass in the props like this:
// feet={expense.afee}
// description={expense.description}
// id={expense.id}
// location={expense.location}
// createdAt={expense.createdAt}