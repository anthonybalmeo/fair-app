/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import { compose } from 'redux';
import CarDetailsPage from '../components/CarDetailsPage';
import WithModel from '../components/WithModel';
import { LoadingScreen } from '../components/LoadingScreen'
import store from '../store';
import { checkVehicleIsFavorite } from  '../utils/check-is-favorite';
import {
  fetchVehicleByVin,
  saveFavoriteVehicles,
  removeFavoriteVehicles,
  updateMonthlyVehiclepaymentsPerMiles,
  saveVehicle,
} from '../store/actions';

const loadModel = async (props) => {
  try {
    const { vehicles } = store.getState()
    const { vehicleVin } = props;
    
    const loadedVehicle = vehicles.find(({id}) => id === props.vehicleVin)

    // CHECKS IF VEHICLE IS LOADED INTO STATE BEFORE LOADING AGAIN
    const { payload: { vehicle: { product_financials } } }  = loadedVehicle
      ? store.dispatch(saveVehicle(loadedVehicle))
      : await store.dispatch(fetchVehicleByVin(vehicleVin))

    // STORES INITIAL PAYMENT OPTIONS FOR SELECTED VEHICLE
    const {
      monthly_payment_cents,
    } = product_financials[0];

    const paymentsPerMiles = {
      monthly: monthly_payment_cents / 100,
      miles: 10000,
    };

    store.dispatch(updateMonthlyVehiclepaymentsPerMiles(paymentsPerMiles.monthly, paymentsPerMiles.miles));

  } catch (e) {
    // REDIRECTING ONLY CAUSE ENDPOINT IS MISSING. REDIRECT TO LISTING ROUTE
    props.history.push('/listing')
  }
}

// RETRIEVES DYNAMIC VIN FROM URL
const routerProps = (state, ownProps) => {

  return({
    vehicleVin: ownProps.match.params.vehicleVin,
  });
}

const mapStateToProps = (state) => {
  const {
    vehicle,
    favoriteVehicles,
    paymentsPerMiles,
  } = state;

  const vehicleWithFavorite = {
    ...vehicle,
    isFavorite: checkVehicleIsFavorite(vehicle, favoriteVehicles)
  };

  return ({
    vehicle: vehicleWithFavorite,
    paymentsPerMiles,
  })
}

const mapDispatchToProps = (dispatch) => ({
  saveFavoriteVehicles: (vin) => {
    dispatch(saveFavoriteVehicles(vin));
  },
  removeFavoriteVehicles: (vin) => {
    dispatch(removeFavoriteVehicles(vin));
  },
  updateMonthlyVehiclepaymentsPerMiles: (payments, miles) => {
    dispatch(updateMonthlyVehiclepaymentsPerMiles(payments, miles));
  }
});

export default compose(
  connect(routerProps),
  WithModel(loadModel, LoadingScreen('Loading car details ...')),
  connect(mapStateToProps, mapDispatchToProps)
)(CarDetailsPage)
