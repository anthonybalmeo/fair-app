/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import App from './app';
import CarListingRedirect from './containers/CarListingRedirect';
import CarListing from './containers/CarListing';
import CarDetails from './containers/CarDetails';
import { NotFoundPage } from './components/NotFoundPage';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/listing" component={CarListingRedirect}/>
      <Route exact path="/listing/:page" component={CarListing}/>
      <Route exact path="/detail/:vehicleVin" component={CarDetails}/>
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default Routes;
