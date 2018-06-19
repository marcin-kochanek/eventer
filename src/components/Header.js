import React from 'react';

const Header = (props) => (
  <div className="header">
    <h1 className="header__title">{props.title}</h1>
    {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    <button 
      className="button button--start" 
      onClick={() => { 
        const app = document.getElementsByClassName('app')[0];
        app.scrollIntoView({block: 'start', behavior: 'smooth'});
      }}>
      Get started
    </button>
  </div>
);

Header.defaultProps = {
  title: 'Do',
  subtitle: 'React to-do app. yours, for free.'
};

export default Header;