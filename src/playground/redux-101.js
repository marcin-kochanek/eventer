import { createStore } from 'redux';

const store = createStore((state = { count: 0}, action) => {
  switch (action.type) {
  case 'INCREMENT': {
    const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
    return {
      count: state.count + incrementBy
    };
  }
  case 'DECREMENT': {
    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
    return {
      count: state.count - decrementBy
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
});

// SUBSCRIBING
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// ACTIONS - an object that gets sent to the store
// I want to increment the count
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

// zatrzymuje działanie funkcji subscribe()
//unsubscribe();

store.dispatch({
  type: 'INCREMENT'
});

// I want to set the count equal to 0
store.dispatch({
  type: 'RESET'
});

// I want to decrement the count
store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});

store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type: 'SET',
  count: 101
});