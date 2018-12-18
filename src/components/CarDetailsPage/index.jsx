import React, { Component } from 'react';
import SliderComponent from '../SliderComponent'
import '../../../styles/components/SliderComponent/index.sass'

export default class CarDetailsPage extends Component {
  render () {
    const { vehicle } = this.props
    return (
      <div>
        {vehicle.model}
        <img src={vehicle.chrome_image_url} alt={vehicle.model}/>
        <SliderComponent
          minimumMonthlyFee={vehicle.product_financials[0].monthly_payment_cents}
          startingFee={vehicle.product_financials[0].start_fee_cents}
        />
      </div>
    )
  }
}
