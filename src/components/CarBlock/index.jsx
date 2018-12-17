import React, { Component } from 'react';
import styles from '../../../styles/components/CarBlock/index.sass';
import Grid from 'react-css-grid';
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
    const { vehicles } = this.props
    if (!vehicles) return null;
    return (
      <div className={styles.CarBlock} >
      {
        vehicles.map((vehicle, i) => (
        <Grid key={i} >
          <div>
            <input type='checkbox' onChange={this.selectCar} checked={this.state.isSelected} />
          </div>
          <div>
            <img src={vehicle.chrome_image_url} className={styles.CarImage}/>
          </div>
          <div>
            <Grid
              width={100}
            >
              <div className='primary'>{vehicle.model_year} {vehicle.make} {vehicle.model}</div>
            </Grid>
            <Grid
              width={100}
            >
              <div className='secondary'>VIN: {vehicle.id}</div>
            </Grid>
            <Grid
              width={100}
            >
              <div className='secondary'>MAKE: {vehicle.model}</div>
              <div className='secondary'>TRIM: {vehicle.trim}</div>
            </Grid>
            <Grid
              width={100}
            >
              <div className='secondary'>STK: {vehicle.product_financials[0].id}</div>
              <div className='secondary'>MILES: {vehicle.mileage}</div>
            </Grid>
          </div>
          <div>
            <Slider />
          </div>
        </Grid>
        ))
      }
    </div>
    )
  }
}

CarBlock.propTypes = {
  vehicles: Proptypes.array,
}