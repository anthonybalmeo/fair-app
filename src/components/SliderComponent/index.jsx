import React from 'react';
import Slider from 'react-rangeslider'
import '../../../styles/components/SliderComponent/index.sass'

class SliderComponent extends React.Component {
  constructor(props) {
    super(props);
    const incrementBy = 21
    const maxMileageValue = 4

    this.state = {
      minimum: props.minimumMonthlyFee/100,
      maximum: props.minimumMonthlyFee/100 + (incrementBy * maxMileageValue),
      budget: props.minimumMonthlyFee/100,
    };
  }
  handleOnChange = (value) => {
    this.setState({
      budget: value
    })
  }

  createSliderLabel = minimum => {
    const pricePerMile = {};
    const incrementBy = 21;
    const maxMileageValue = 5;
    for (let i = 0; i < maxMileageValue; i++) {
      pricePerMile[minimum + (incrementBy*i)] = minimum + (incrementBy*i);
    }
    return pricePerMile;
  }

  render () {
    const { minimum, maximum, budget } = this.state
    const sliderLabel = this.createSliderLabel(minimum)

    return (
      <div className='fair-slider'>
        <Slider
          min={this.state.minimum}
          max={this.state.maximum}
          step={21}
          value={this.state.budget}
          onChange={this.handleOnChange}
          labels={sliderLabel}
        />
      </div>
    )
  }
}

export default SliderComponent;
