import React from 'react';
import Proptypes from 'prop-types';
import SliderComponent from '../SliderComponent';
import NumberFormat from 'react-number-format';
import FavoriteHeart from '../FavoriteHeart';
import Slider from "react-slick";
import styles from '../../../styles/components/CarDetailsPage/index.sass';

export default class CarDetailsPage extends React.Component {
  render () {
    const {
      vehicle: {
        chrome_image_url,
        id,
        make,
        mileage,
        model,
        model_year,
        product_financials,
        trim,
        image_location_list,
        isFavorite,
      },
      paymentsPerMiles: {
        monthly,
        miles,
      },
      updateMonthlyVehiclepaymentsPerMiles,
      saveFavoriteVehicles,
      removeFavoriteVehicles,
    } = this.props;

    const gallerySettings = {
      dots: true,
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const startingPayments = product_financials[0].start_fee_cents / 100;

    return (
      <div className='ui__bg-color--secondary animated fadeIn' data-test-id='car-details-page'>
        <div className='wrapper'>
          <div className='row middle-xs'>
            <div className='col-xs-offset-2 col-xs-8 ui__mb--3'>
            <Slider {...gallerySettings}>
              <img src={chrome_image_url} alt={model}/>
              {
                image_location_list.map((img, i) => (
                  <img src={img} alt={`model-${i}`} key={i}/>
                ))
              }
            </Slider>
            </div>
            <div className='col-xs-12 ui__bg-color--primary'>
                <div className='row middle-xs ui__p--2'>
                <div className='col-xs-12 ui__text-align--center-mobile-and-tablet'>
                  <FavoriteHeart
                    className='ui__ml--1 ui__mb--2'
                    id={id}
                    defaultFavorite={isFavorite}
                    saveFavoriteVehicles={saveFavoriteVehicles}
                    removeFavoriteVehicles={removeFavoriteVehicles}
                  />
                </div>
                  <div className='col-xs-12 col-md-6 col-lg-8 ui__text-align--center-mobile-and-tablet'>
                    <p className={`primary ${styles.yearMake}`}>{model_year} {make}</p>
                    <p className={`primary ${styles.modelTrim}`}>{model} {trim}</p>
                    <p className={`${styles.mileage} highlight ui__mb--2`}><NumberFormat value={mileage} displayType={'text'} thousandSeparator={true} /> Mi.</p>
                  </div>
                  <div className='col-xs-6 col-md-3 col-lg-2 ui__text-align--center ui__border ui__border--r'>
                    <p className={`${styles.paymentPricePrimary} primary`}>Monthy Pymt.</p>
                    <p className={`${styles.paymentPrice} highlight`}><NumberFormat value={monthly} prefix={'$'} displayType={'text'} /></p>
                    <p className={`${styles.paymentSecondary} secondary`}>Payments Estimated</p>
                  </div>
                  <div className='col-xs-6 col-md-3 col-lg-2 ui__text-align--center'>
                    <p className={`${styles.paymentPricePrimary} primary`}>Start Pymt.</p>
                    <p className={`${styles.paymentPrice} primary`}><NumberFormat value={startingPayments} prefix={'$'} displayType={'text'} /></p>
                    <p className={`${styles.paymentSecondary} secondary`}>Down Payment</p>
                  </div>
                  <div className='col-xs-12'>
                    <hr className='ui__hr ui__mt--4 ui__mb--3' />
                  </div>
                  <div className='col-xs-12 ui__mt-2 ui__mb--2'>
                    <h1 className='ui__text-align--center'>Extra Miles</h1>
                    <p className={`${styles.extraMilesSubheader} ui__mb--1 ui__ml--a ui__mr--a`}>Add extra miles to avoid exceeding your limit. We'll refund you any extra miles you don't use.</p>
                  </div>
                  <div className='col-xs-6 col-md-3 col-md-offset-3 ui__text-align--center'>
                    <p className={styles.extraMilesTitle}>Yearly Mileage</p>
                    <p className={styles.extraMilesValues}><NumberFormat value={miles} displayType={'text'} thousandSeparator={true}/></p>
                  </div>
                  <div className='col-xs-6 col-md-3 ui__text-align--center'>
                    <p className={styles.extraMilesTitle}>Per Month</p>
                    <p className={styles.extraMilesValues}><NumberFormat value={monthly} prefix={'$'} displayType={'text'} /></p>
                  </div>
                  <div className='col-xs-12 ui__mt--2 ui__pb--4'>
                    <SliderComponent
                      monthlyPayments={monthly}
                      miles={miles}
                      startingPayments={startingPayments}
                      updateMonthlyVehiclepaymentsPerMiles={updateMonthlyVehiclepaymentsPerMiles}
                    />
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

CarDetailsPage.propTypes = {
  updateMonthlyVehiclepaymentsPerMiles: Proptypes.func,
  removeFavoriteVehicles: Proptypes.func,
  saveFavoriteVehicles: Proptypes.func,
  paymentsPerMiles: Proptypes.shape({
    monthly: Proptypes.number,
    miles: Proptypes.number,
  }),
  vehicle: Proptypes.shape({
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
  }),
}
