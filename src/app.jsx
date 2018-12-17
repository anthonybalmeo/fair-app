import React from 'react';
import Navigation from './components/Navigation';
import 'normalize.css';

import 'styles/base/_main.sass'  // Global styles
import 'styles/base/_common.sass'  // Global styles
import styles from './app.sass'  // Css-module styles

const App = () => (
  <div className='App'>
    <Navigation/>
    <div>
      <h1>Fair Listings</h1>
    </div>
  </div>
);

export default App;
