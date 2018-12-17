import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../styles/components/CarBlock/index.sass';
import Proptypes from 'prop-types';
import NumberFormat from 'react-number-format';
import FavoriteHeart from '../FavoriteHeart';

export default class CarBlock extends React.Component {
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
        isFavorite,
      },
      saveFavoriteVehicles,
      removeFavoriteVehicles,
    } = this.props;

    const monthlyPayments = product_financials[0].monthly_payment_cents / 100;
    const startingFee = product_financials[0].start_fee_cents / 100;

    return (
      <div className={`row middle-xs ${styles.CarBlock}`} data-test-id='car-block'>
        <div className='col-xs-6 ui__text-align--left'>
          <p className={`${styles.TextSecondary} secondary`}>{model_year} {make}</p>
          <p className={`${styles.TextPrimary} primary`}>{model} {trim}</p>
          <p><NumberFormat value={mileage} displayType={'text'} prefix={'Mileage: '} thousandSeparator={true} className={`${styles.TextSecondary} secondary`} /></p>
        </div>
        <div className='col-xs-6 ui__text-align--right'>
          <p className={`${styles.TextSecondary} secondary`}>As low as</p>
          <NumberFormat value={monthlyPayments} prefix={'$'} displayType={'text'} className={`${styles.TextEmphasize} highlight`} />
          <p className={`${styles.TextSecondary} secondary`}>Per Mo.</p>
        </div>
        <div className='col-xs-12'>
          <Link to={`/detail/${id}`}>
            <img src={chrome_image_url} className={styles.CarImage} alt={model}/>
          </Link>
        </div>
        <div className='col-xs-6 ui__text-align--left'>
          <FavoriteHeart
            id={id}
            defaultFavorite={isFavorite}
            saveFavoriteVehicles={saveFavoriteVehicles}
            removeFavoriteVehicles={removeFavoriteVehicles}
          />
        </div>
        <div className='col-xs-6 ui__text-align--right'>
          <NumberFormat value={startingFee} prefix={'$'} displayType={'text'} className={`${styles.TextEmphasize} primary`} />
          <p className={`${styles.TextSecondary} secondary`}>Start Pymt.</p>
        </div>
      </div>
    )
  }
}

CarBlock.propTypes = {
  saveFavoriteVehicles: Proptypes.func,
  removeFavoriteVehicles: Proptypes.func,
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
