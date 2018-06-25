import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import EventsDashboardPage from '../components/EventsDashboardPage';
import AddEventPage from '../components/AddEventPage';
import EditEventPage from '../components/EditEventPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={EventsDashboardPage} />
        <Route path="/add" component={AddEventPage} />
        <Route path="/edit/:id" component={EditEventPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;