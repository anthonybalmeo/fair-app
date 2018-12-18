import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/listing/1">Listings</Link></li>
      <li><Link to="/sample">Sample</Link></li>
    </ul>
  </div>
);

export default Navigation;
