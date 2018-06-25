import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleEvents from './selectors/events';

import { addEvent, RemoveEvent, editEvent } from './actions/events';
import { setTextFilter, sortByDate, sortByFee, setStartDate, setEndDate } from './actions/filters';

import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  const visibleEvents = getVisibleEvents(state.events, state.filters);
  console.log(visibleEvents);
});

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('app')); 