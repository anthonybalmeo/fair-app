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
    };
  }

  handleOnChange = (value) => {
    const payments = {
      monthly: value,
    };
    this.props.updateMonthlyVehiclePayments(payments);

    this.setState({
      selectedPayment: value
    });
  }

  createSliderLabel = minimum => {
    const pricePerMile = {};
    const incrementBy = 21;
    const maxMileageValue = 5;
    const mileage = 10;
    const mileageIncrement = 2.5;

    for (let i = 0; i < maxMileageValue; i++) {
      pricePerMile[minimum + (incrementBy * i)] = `${mileage + (mileageIncrement * i)}K`;
    }
    return pricePerMile;
  }

  render () {
    const { minimum, maximum, selectedPayment } = this.state;
    const sliderLabel = this.createSliderLabel(minimum);

    return (
      <div className='fair-slider ui__mt--4'>
        <Slider
          min={minimum}
          max={maximum}
          step={21}
          value={selectedPayment}
          onChange={this.handleOnChange}
          labels={sliderLabel}
        />
      </div>
    )
  }
}

export default SliderComponent;


SliderComponent.propTypes = {
  updateMonthlyVehiclePayments: Proptypes.func,
  monthlyPayments: Proptypes.number,
}
