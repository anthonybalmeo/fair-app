import React, { Component } from 'react';
import SliderComponent from '../SliderComponent'
import NumberFormat from 'react-number-format';
import Slider from "react-slick";
import '../../../styles/components/SliderComponent/index.sass'

export default class CarDetailsPage extends Component {
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
      },
    } = this.props

    const monthlyPayments = product_financials[0].monthly_payment_cents/100
    const startingFee = product_financials[0].start_fee_cents/100
    var gallerySettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className='ui__bg-color--secondary'>
        <div className='wrapper'>
          <div className='row middle-xs'>
            <div className='col-xs-offset-2 col-xs-8'>
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
                <p className='primary'>{model_year} {make}</p>
                <p className='primary'>{model} {trim}</p>
                <p><NumberFormat value={mileage} displayType={'text'} prefix={'Mileage: '} thousandSeparator={true} className='highlight' /></p>
                <NumberFormat value={monthlyPayments} prefix={'$'} displayType={'text'} className='highlight' />
                <NumberFormat value={startingFee} prefix={'$'} displayType={'text'} className='primary' />
                <SliderComponent
                  minimumMonthlyFee={monthlyPayments}
                  startingFee={startingFee}
                />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
