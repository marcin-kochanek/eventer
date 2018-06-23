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
// SORTY_BY_DATE
// SORTY_BY_CATEGORY
// SET_START_DATE
// SET_END_DATE

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
  sortBy: 'date',
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
  default: 
    return state;
  }
};

// Store creation
const store = createStore(
  combineReducers({
    events: eventsReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const eventOne = store.dispatch(addEvent({ title: 'Single Party', description: 'A great party with house music for all singles' }));
const eventTwo = store.dispatch(addEvent({ title: 'Coffee lovers', description: 'A meeting for everyone who loves coffe' }));

store.dispatch(removeEvent(eventOne.event.id));
store.dispatch(editEvent(eventTwo.event.id, { title: 'Tea lovers' }));
store.dispatch(setTextFilter('party'));
store.dispatch(setTextFilter());

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
    sortBy: 'date', //date or category
    startDate: undefined,
    endDate: undefined
  }
};