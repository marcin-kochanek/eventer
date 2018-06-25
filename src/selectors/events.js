import moment from 'moment';

// Get visible events
const getVisibleEvents = (events, { text, sortBy, startDate, endDate }) => {
  return events.filter((event) => {
    const textMatch = (event.title.toLowerCase().includes(text.toLowerCase()) || event.location.toLowerCase().includes(text.toLowerCase()));
    const startDateMatch = startDate ? startDate.isSameOrBefore(moment(event.createdAt), 'day') : true ;
    const endDateMatch = endDate ? endDate.isSameOrAfter(moment(event.createdAt), 'day') : true ;

    return textMatch && startDateMatch && endDateMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'fee') {
      return a.fee > b.fee ? 1 : -1; //the event with the lowest fee on the top
    }
  });
};

export default getVisibleEvents;