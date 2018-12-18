import React, { Component } from 'react';
import Proptypes from 'prop-types';
import CarBlock from '../CarBlock'

export default class CarListingPage extends Component {
  render () {
    const {
      removeFavoriteVehicles,
      saveFavoriteVehicles,
      vehicles,
    } = this.props

    return (
      <div className='wrapper'>
        <div className='row'>
        {  
          vehicles.map((vehicle, i) => (
            <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4' key={i}>
              <CarBlock
                vehicle={vehicle}
                saveFavoriteVehicles={saveFavoriteVehicles}
                removeFavoriteVehicles={removeFavoriteVehicles}
                key={i}
              />
            </div>
          ))
        }
        </div>
      </div>
    )
  }
}

CarListingPage.propTypes = {
  removeFavoriteVehicles: Proptypes.func,
  saveFavoriteVehicles: Proptypes.func,
  vehicles: Proptypes.arrayOf(
    Proptypes.shape({
    chrome_image_url: Proptypes.string,
    id: Proptypes.string,
    make: Proptypes.string,
    mileage: Proptypes.number,
    model: Proptypes.string,
    model_year: Proptypes.string,
    product_financials: Proptypes.arrayOf(
      Proptypes.shape({
        id: Proptypes.number,
        monthly_payment_cents: Proptypes.number,
        start_fee_cents: Proptypes.number,
    })),
    isFavorite: Proptypes.bool,
  })),
}