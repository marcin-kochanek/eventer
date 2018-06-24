import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addEvent, RemoveEvent, editEvent } from './actions/events';
import { setTextFilter, sortByDate, sortByFee, setStartDate, setEndDate } from './actions/filters';
import getVisibleEvents from './selectors/events';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  const visibleEvents = getVisibleEvents(state.events, state.filters);
  console.log(visibleEvents);
});

store.dispatch(addEvent({
  title: 'Singlarty',
  description: 'A great party with house music for all singles',
  fee: 5,
  createdAt: -21000
}));

store.dispatch(addEvent({
  title: 'Coffee lovers',
  description: 'A meeting for everyone who loves coffee',
  fee: 15,
  createdAt: -1000
}));

store.dispatch(addEvent({
  title: 'WC2018',
  description: 'You can watch all WC matches here',
  fee: 0,
  createdAt: 1000
}));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('app')); 