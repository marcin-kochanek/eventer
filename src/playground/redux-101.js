import { createStore } from 'redux';

//
// ACTION GENERATORS - functions that return action objects
//
const incrementCount = ({ incrementBy = 1} = {}) => ({ 
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({ 
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({ type: 'RESET' });

const setCount = ({ count }) => ({ 
  type: 'SET',
  count
});

//
// REDUCER - are pure functions and never change state and action
//
const countReducer = (state = { count: 0}, action) => {
  switch (action.type) {
  case 'INCREMENT': {
    return {
      count: state.count + action.incrementBy
    };
  }
  case 'DECREMENT': {
    return {
      count: state.count - action.decrementBy
    };
  }
  case 'RESET':
    return {
      count: 0
    };
  case 'SET':
    return {
      count: action.count
    };
  default:
    return state;
  }
};

const store = createStore(countReducer);

//
// SUBSCRIBING
//
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// zatrzymuje działanie funkcji subscribe()
//unsubscribe();

//
// ACTIONS - an object that gets sent to the store
//
// I want to increment the count
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// I want to set the count equal to 0
store.dispatch(resetCount());

// I want to decrement the count
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: -100 }));