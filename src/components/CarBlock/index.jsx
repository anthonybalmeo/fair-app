import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../styles/components/CarBlock/index.sass';
import SliderComponent from '../SliderComponent'
import Proptypes from 'prop-types'

export default class CarBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {isSelected: false};
    this.selectCar = this.selectCar.bind(this);
  }

  selectCar = (e) => {
    this.setState({
      isSelected: e.target.checked
    })
  }

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
      }
    } = this.props
    return (
      <div className={`row middle-xs ${styles.CarBlock}`}>
        <div className='col-xs-3'>
          <input type='checkbox' onChange={this.selectCar} checked={this.state.isSelected} />
          <Link to={`/detail/${id}`}>
            <img src={chrome_image_url} className={styles.CarImage} alt={model}/>
          </Link>
        </div>
        <div className='col-xs-5'>
          <div className='box box-container'>
            <div className='row'>
              <div className='primary col-xs-12'>{model_year} {make} {model}</div>
              <div className='secondary col-xs-12'>VIN: {id}</div>
              <div className='secondary col-xs-6'>MAKE: {model}</div>
              <div className='secondary col-xs-6'>TRIM: {trim}</div>
              <div className='secondary col-xs-6'>STK: {product_financials[0].id}</div>
              <div className='secondary col-xs-6'>MILES: {mileage}</div>
            </div>
          </div>
        </div>
        <div className='col-xs-4'>
          <SliderComponent
            min={product_financials[0].monthly_payment_cents}
            max={product_financials[0].start_fee_cents}
          />
        </div>
      </div>
    )
  }
}

CarBlock.propTypes = {
  vehicle: Proptypes.object,
}