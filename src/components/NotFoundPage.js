import React from 'react';
import { Link } from 'react-router-dom'; 

const NotFoundPage = () => (
  <div>
    <h2>404!</h2>
    <Link to="/">Go to home page</Link>
  </div>
);

export default NotFoundPage;