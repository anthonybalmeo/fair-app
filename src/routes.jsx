import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './app';
import About from './components/About';
import Sample from './components/Sample';
import CarListing from './containers/CarListing';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/about" component={About}/>
      <Route path="/sample" component={Sample}/>
      <Route path="/car-listing/:page" component={CarListing}/>
    </div>
  </Router>
);

export default Routes;
