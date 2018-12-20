/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import { compose } from 'redux';
import CarListingPage from '../components/CarListingPage';
import WithModel from '../components/WithModel';
import { LoadingScreen } from '../components/LoadingScreen'
import store from '../store';
import {
  fetchVehicleByPage,
  saveFavoriteVehicles,
  removeFavoriteVehicles,
  clearMonthlyVehiclePayments,
} from '../store/actions';
import { checkVehicleIsFavorite } from '../utils/check-is-favorite'

const loadModel = async (props) => {
  try {
  const { vehicles } = store.getState()
  const { pageId } = props

  // RESETS VEHICLE MONTHLY PAYMENTS DATA IN STATE
  store.dispatch(clearMonthlyVehiclePayments())

  // PREVENTS RELOADING VEHICLE ENDPOINT IF ALREADY VEHICLES IN STATE
  if (vehicles) return
  
  await store.dispatch(fetchVehicleByPage(pageId))

  } catch (e) {
    console.error(e)
  }
};

const routerProps = (state, ownProps) => ({
  pageId: ownProps.match.params.page,
});

const mapStateToProps = (state, ownProps) => {
  const {
    vehicles,
    favoriteVehicles,
  } = state;
  const { page } = ownProps.match.params
  
  const vehicleWithFavorites = vehicles.map(vehicle => {
    return ({
      ...vehicle,
      isFavorite: checkVehicleIsFavorite(vehicle, favoriteVehicles)
    })
  });

  return ({
    page,
    vehicles: vehicleWithFavorites,
  })
}

const mapDispatchToProps = (dispatch) => ({
  saveFavoriteVehicles: (vin) => {
    dispatch(saveFavoriteVehicles(vin));
  },

  removeFavoriteVehicles: (vin) => {
    dispatch(removeFavoriteVehicles(vin));
  },
})

export default compose(
  connect(routerProps),
  WithModel(loadModel, LoadingScreen()),
  connect(mapStateToProps, mapDispatchToProps)
)(CarListingPage)
