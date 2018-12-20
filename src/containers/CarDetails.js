/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import { compose } from 'redux';
import CarDetailsPage from '../components/CarDetailsPage';
import WithModel from '../components/WithModel';
import store from '../store';
import { checkVehicleIsFavorite } from  '../utils/check-is-favorite';
import {
  fetchVehicleByVin,
  saveFavoriteVehicles,
  removeFavoriteVehicles,
  updateMonthlyVehiclepaymentsPerMiles,
} from '../store/actions';

const loadModel = async (props) => {
  // LOAD SPECIFIC VEHICLE BY VIN
  const { vehicleVin } = props;
  const { payload: { vehicle: { product_financials } } }  = await store.dispatch(fetchVehicleByVin(vehicleVin));

  // STORES INITIAL PAYMENT OPTIONS FOR SELECTED VEHICLE
  const {
    monthly_payment_cents,
  } = product_financials[0];

  const paymentsPerMiles = {
    monthly: monthly_payment_cents / 100,
    miles: 10000,
  };
  store.dispatch(updateMonthlyVehiclepaymentsPerMiles(paymentsPerMiles.monthly, paymentsPerMiles.miles));
}

// RETRIEVES DYNAMIC VIN FROM URL
const routerProps = (state, ownProps) => ({
  vehicleVin: ownProps.match.params.vehicleVin,
});

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
  WithModel(loadModel),
  connect(mapStateToProps, mapDispatchToProps)
)(CarDetailsPage)
