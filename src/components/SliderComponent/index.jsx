import React from 'react';
import Slider from 'react-rangeslider'
import '../../../styles/components/SliderComponent/index.sass'

class SliderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minimum: props.min,
      maximum: props.max,
      budget: props.max,
    };
  }
  handleOnChange = (value) => {
    this.setState({
      budget: value
    })
  }

 render () {
   const { minimum, maximum, budget } = this.state
   const sliderLabel = {
     [minimum]: `${minimum}`,
     [maximum]: `${maximum}`,
   }
  return (
    <div className='fair-slider'>
      <Slider
        min={this.state.minimum}
        max={this.state.maximum}
        value={this.state.budget}
        onChange={this.handleOnChange}
        labels={sliderLabel}
      />
    </div>
  )
 }
}

export default SliderComponent;
