import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './app';
import About from './components/About';
import Sample from './components/Sample';
import CarListing from './containers/CarListing';
import CarDetails from './containers/CarDetails';

const Routes = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={App}/>
      <Route path="/about" component={About}/>
      <Route path="/sample" component={Sample}/>
      <Route path="/listing/:page" component={CarListing}/>
      <Route path="/detail/:vehicleVin" component={CarDetails}/>
    </React.Fragment>
  </Router>
);

export default Routes;
