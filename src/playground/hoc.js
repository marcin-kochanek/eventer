import React from 'react';
import ReactDOM from 'react-dom';

// regular component
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>Your PIN: {props.info}</p>
  </div>
);

const withAdminWarining = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please do not share!</p>}
      <WrappedComponent {...props}/>
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {(props.isAuthenticated && <WrappedComponent {...props}/>) || <p>Please log into view the info</p>}
    </div>
  );
};

const AdminInfo = withAdminWarining(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info="123123" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="123123" />, document.getElementById('app'));