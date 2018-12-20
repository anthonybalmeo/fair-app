import React from 'react';
import Proptypes from 'prop-types';
import Navigation from '../Navigation'
import CarBlock from '../CarBlock';
import Pagination from '../Pagination'

export default class CarListingPage extends React.Component {
  render () {
    const {
      removeFavoriteVehicles,
      saveFavoriteVehicles,
      vehicles,
      page,
    } = this.props;

    const paginationList = ['1', '2', '3']
    return (
      <React.Fragment>
        <Navigation />
        <div className='wrapper ui__pl--1 ui__pr--1' data-test-id='car-listing-page'>
          <h1 className='ui__page-title ui__mt--2'>Find a fair car</h1>
          <hr className='ui__hr ui__mb--3' />

          <div className='row animated fadeIn'>
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
          <div className='col-xs-12'>
            <Pagination
              currentPage={page}
              pages={paginationList}
            />
          </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

CarListingPage.propTypes = {
  page: Proptypes.string,
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
