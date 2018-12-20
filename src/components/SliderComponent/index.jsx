import React from 'react';
import Slider from 'react-rangeslider';
import '../../../styles/components/SliderComponent/index.sass';
import Proptypes from 'prop-types';

class SliderComponent extends React.Component {
  constructor(props) {
    super(props);
    const incrementBy = 21
    const maxMileageValue = 4

    this.state = {
      minimum: props.monthlyPayments,
      maximum: props.monthlyPayments + (incrementBy * maxMileageValue),
      selectedPayment: props.monthlyPayments,
      originalMiles: props.miles,
      originalMonthlyPayments: props.monthlyPayments,
    };
  }

  // Calculates the miles per price update
  calculateMonthlyPaymentsAndMiles = (originalMonthlyPayments, originalMiles, selectedPayment) => {
    const priceIncrementBy = 21;
    const mileageIncrementBy = 2.5;
    const priceIncreaseMultiplier = (selectedPayment - originalMonthlyPayments) / priceIncrementBy;
    const updatedMileage = originalMiles + (1000 * (priceIncreaseMultiplier * mileageIncrementBy));
    return  {
      monthly: selectedPayment,
      miles: updatedMileage,
    }
  }

  // Creates the labels for the slider
  createSliderLabel = minimum => {
    const pricePerMile = {};
    const priceIncrementBy = 21;
    const maxMileageValue = 5;
    const mileage = 10;
    const mileageIncrement = 2.5;

    for (let i = 0; i < maxMileageValue; i++) {
      pricePerMile[minimum + (priceIncrementBy * i)] = `${mileage + (mileageIncrement * i)}K`;
    }
    return pricePerMile;
  }

  // Sets the value for the monthly payments
  handleOnChange = (value) => {
    this.setState({
      selectedPayment: value,
    });
  }

  // Saves monthly payments and miles to state
  handleOnChangeComplete = () => {
    const {
      originalMonthlyPayments,
      originalMiles,
      selectedPayment,
    } = this.state

    const { monthly, miles } = this.calculateMonthlyPaymentsAndMiles(originalMonthlyPayments, originalMiles, selectedPayment)
   
    const {
      updateMonthlyVehiclepaymentsPerMiles,
    } = this.props

    updateMonthlyVehiclepaymentsPerMiles(monthly, miles);
  }

  render () {
    const { minimum, maximum, selectedPayment } = this.state;
    const sliderLabel = this.createSliderLabel(minimum);

    return (
      <div className='fair-slider ui__mt--2'>
        <Slider
          min={minimum}
          max={maximum}
          step={21}
          value={selectedPayment}
          onChange={this.handleOnChange}
          onChangeComplete={this.handleOnChangeComplete}
          labels={sliderLabel}
        />
      </div>
    )
  }
}

export default SliderComponent;


SliderComponent.propTypes = {
  updateMonthlyVehiclepaymentsPerMiles: Proptypes.func,
  monthlyPayments: Proptypes.number,
  miles: Proptypes.number,
}
