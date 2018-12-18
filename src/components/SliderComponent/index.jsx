import React from 'react';
import 'rc-slider/assets/index.css';
import Slider, { Range } from 'rc-slider';

class SliderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minimum: props.min,
      maximum: props.max,
    };
  }
  onSliderChange = (value) => {
    console.log(value);
  }
  onMinChange = (e) => {
    this.setState({
      min: +e.target.value || this.props.min,
    });
  }
  onMaxChange = (e) => {
    this.setState({
      max: +e.target.value || this.props.max,
    });
  }
 render () {
   const { min, max } = this.props
  return (
    <div>
      <label>Min: </label>
      <input type="number" value={this.state.minimum} onChange={this.onMinChange} />
      <br />
      <label>Max: </label>
      <input type="number" value={this.state.maximum} onChange={this.onMaxChange} />
      <br /><br />
      <Slider defaultValue={50}
        min={this.state.minimum}
        max={this.state.maximum}
        onChange={this.onSliderChange}
        // marks={{min, max}}
      />
    </div>
  )
 }
}

export default SliderComponent;
