import React from 'react';
import EventListFilters from './EventListFilters';
import EventList from './EventList';

const EventsDashboardPage = () => (
  <div>
    <EventListFilters />
    <EventList />
  </div>
);

export default EventsDashboardPage;