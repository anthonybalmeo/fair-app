import React from 'react';
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
      payments: {
        monthly,
      },
      updateMonthlyVehiclePayments,
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
      <div className='ui__bg-color--secondary animated fadeIn'>
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
                <div className='col-xs-12'>
                  <FavoriteHeart
                    className='ui__ml--1 ui__mb--2'
                    id={id}
                    defaultFavorite={isFavorite}
                    saveFavoriteVehicles={saveFavoriteVehicles}
                    removeFavoriteVehicles={removeFavoriteVehicles}
                  />
                </div>
                  <div className='col-xs-6 col-sm-6 col-md-8 col-lg-8'>
                    <p className={`primary ${styles.yearMake}`}>{model_year} {make}</p>
                    <p className={`primary ${styles.modelTrim}`}>{model} {trim}</p>
                    <p className={`${styles.mileage} highlight`}><NumberFormat value={mileage} displayType={'text'} thousandSeparator={true} /> Mi.</p>
                  </div>
                  <div className='col-xs-3 col-sm-3 col-md-2 col-lg-2 ui__text-align--center ui__border ui__border--r'>
                    <p className={`${styles.paymentPricePrimary} primary`}>Monthy Pymt.</p>
                    <p className={`${styles.paymentPrice} highlight`}><NumberFormat value={monthly} prefix={'$'} displayType={'text'} /></p>
                    <p className={`${styles.paymentSecondary} secondary`}>Payments Estimated</p>
                  </div>
                  <div className='col-xs-3 col-sm-3 col-md-2 col-lg-2 ui__text-align--center'>
                    <p className={`${styles.paymentPricePrimary} primary`}>Start Pymt.</p>
                    <p className={`${styles.paymentPrice} primary`}><NumberFormat value={startingPayments} prefix={'$'} displayType={'text'} /></p>
                    <p className={`${styles.paymentSecondary} secondary`}>Down Payment</p>
                  </div>
                  <div className='col-xs-12'>
                    <SliderComponent
                      monthlyPayments={monthly}
                      startingPayments={startingPayments}
                      updateMonthlyVehiclePayments={updateMonthlyVehiclePayments}
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
