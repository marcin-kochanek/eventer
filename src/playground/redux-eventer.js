import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Actions
// ADD_EVENT
const addEvent = (
  {
    title = '', 
    description = '', 
    organiser = '', 
    location = '',
    fee = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EVENT',
  event: {
    id: uuid(),
    title,
    description,
    organiser,
    location,
    fee,
    createdAt
  }
});
// REMOVE_EVENT
const removeEvent = (id) => ({
  type: 'REMOVE_EVENT',
  id
});
// EDIT_EVENT
const editEvent = (id, updates) => ({
  type: 'EDIT_EVENT',
  id,
  updates
});
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});
// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});
// SORT_BY_FEE
const sortByFee = () => ({
  type: 'SORT_BY_FEE'
});
// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
});
// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate
});

// Events Reducer
const eventsReducerDefaultState = [];

const eventsReducer = (state = eventsReducerDefaultState, action) => {
  switch (action.type) {
  case 'ADD_EVENT':
    return [...state, action.event];
  case 'REMOVE_EVENT':
    return state.filter(({ id }) => id !== action.id);
  case 'EDIT_EVENT':
    return state.map((event) => {
      if (event.id === action.id) {
        return {
          ...event,
          ...action.updates
        }
      } else {
        return event;
      }
    });
  default:
    return state;
  }
};

// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date', //date or amount
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
  case 'SET_TEXT_FILTER':
    return {
      ...state,
      text: action.text
    };
  case 'SORT_BY_DATE':
    return {
      ...state,
      sortBy: 'date'
    };
  case 'SORT_BY_FEE':
    return {
      ...state,
      sortBy: 'fee'
    };
  case 'SET_START_DATE':
    return {
      ...state,
      startDate: action.startDate
    };
  case 'SET_END_DATE':
    return {
      ...state,
      endDate: action.endDate
    };
  default: 
    return state;
  }
};

// Get visible events
const getVisibleEvents = (events, { text, sortBy, startDate, endDate }) => {
  return events.filter((event) => {
    const textMatch = (event.description.toLowerCase() || event.title.toLowerCase()).includes(text.toLowerCase());
    const startDateMatch = typeof startDate !== 'number' || startDate <= event.createdAt;
    const endDateMatch = typeof endDate !== 'number' || endDate >= event.createdAt;

    return textMatch && startDateMatch && endDateMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'fee') {
      return a.fee < b.fee ? 1 : -1;
    }
  });
};

// Store creation
const store = createStore(
  combineReducers({
    events: eventsReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleEvents = getVisibleEvents(state.events, state.filters);
  console.log(visibleEvents);
});

const eventOne = store.dispatch(addEvent({
  title: 'Single Party',
  description: 'A great party with house music for all singles',
  fee: 10,
  createdAt: -21000
}));
const eventTwo = store.dispatch(addEvent({
  title: 'Coffee lovers',
  description: 'A meeting for everyone who loves coffe',
  fee: 5,
  createdAt: -1000
}));

// store.dispatch(removeEvent(eventOne.event.id));
// store.dispatch(editEvent(eventTwo.event.id, { title: 'Tea lovers' }));

// store.dispatch(setTextFilter('singles'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByDate());
store.dispatch(sortByFee());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

const demoState = {
  events: [{
    id: 'kdskks',
    title: 'Single Party',
    description: 'A great party with house music for all singles',
    organizer: 'PAN',
    location: 'Wrocław',
    category: 'party',
    createdAt: 0
  }],
  filters: {
    text: 'Wrocław', // title or location
    sortBy: 'xxx', //date or category
    startDate: undefined,
    endDate: undefined
  }
};