import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../styles/components/CarBlock/index.sass';
import Slider from '../Slider'
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
    const { vehicle } = this.props
    return (
      <div className={`row middle-xs ${styles.CarBlock}`}>
        <div className='col-xs-3'>
          <input type='checkbox' onChange={this.selectCar} checked={this.state.isSelected} />
          <Link to={`/detail/${vehicle.id}`}>
            <img src={vehicle.chrome_image_url} className={styles.CarImage} alt={vehicle.model}/>
          </Link>
        </div>
        <div className='col-xs-5'>
          <div className='box box-container'>
            <div className='row'>
              <div className='primary col-xs-12'>{vehicle.model_year} {vehicle.make} {vehicle.model}</div>
              <div className='secondary col-xs-12'>VIN: {vehicle.id}</div>
              <div className='secondary col-xs-6'>MAKE: {vehicle.model}</div>
              <div className='secondary col-xs-6'>TRIM: {vehicle.trim}</div>
              <div className='secondary col-xs-6'>STK: {vehicle.product_financials[0].id}</div>
              <div className='secondary col-xs-6'>MILES: {vehicle.mileage}</div>
            </div>
          </div>
        </div>
        <div className='col-xs-4'>
          <Slider />
        </div>
      </div>
    )
  }
}

CarBlock.propTypes = {
  vehicle: Proptypes.object,
}