import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => (
  <div className='fair-navigation' data-test-id='navigation'>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/listing/1">Listings</Link></li>
    </ul>
  </div>
);

export default Navigation;
