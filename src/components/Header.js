import React from 'react';
import { NavLink } from 'react-router-dom'; 

const Header = () => (
  <header>
    <h1>Eventer</h1>
    <ul>
      <li><NavLink exact to="/" activeClassName="is-active">Dashboard</NavLink></li>
      <li><NavLink to="/add" activeClassName="is-active">Add a new event</NavLink></li>
      <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
    </ul>
  </header>
);

export default Header;
