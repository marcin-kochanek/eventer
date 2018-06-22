import { createStore, combineReducers } from 'redux';

// ADD_EVENT
// REMOVE_EVENT
// EDIT_EVENT
// SET_TEXT_FILTER
// SORTY_BY_DATE
// SORTY_BY_CATEGORY
// SET_START_DATE
// SET_END_DATE

// Events Reducer
const eventsReducerDefaultState = [];
const eventsReducer = (state = eventsReducerDefaultState, action) => {
  switch (action.type) {
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
console.log(store.getState());

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