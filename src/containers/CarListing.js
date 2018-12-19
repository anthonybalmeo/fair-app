/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import { compose } from 'redux';
import CarListingPage from '../components/CarListingPage';
import WithModel from '../components/WithModel';
import store from '../store';
import {
  fetchVehicleByPage,
  saveFavoriteVehicles,
  removeFavoriteVehicles,
  clearMonthlyVehiclePayments,
} from '../store/actions';
import { checkVehicleIsFavorite } from '../utils/check-is-favorite'

const loadModel = async (props) => {
  const { pageId } = props
  await store.dispatch(fetchVehicleByPage(pageId))
  store.dispatch(clearMonthlyVehiclePayments())
};

const routerProps = (state, ownProps) => ({
  pageId: ownProps.match.params.page,
});

const mapStateToProps = (state) => {
  const {
    vehicles,
    favoriteVehicles,
  } = state;
  
  const vehicleWithFavorites = vehicles.map(vehicle => {
    return ({
      ...vehicle,
      isFavorite: checkVehicleIsFavorite(vehicle, favoriteVehicles)
    })
  });

  return ({
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
  WithModel(loadModel),
  connect(mapStateToProps, mapDispatchToProps)
)(CarListingPage)
