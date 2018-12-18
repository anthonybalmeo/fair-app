import React, { Component } from 'react';

export default class CarDetailsPage extends Component {
  render () {
    const { vehicle } = this.props
    return (
      <div>
        {vehicle.model}
        <img src={vehicle.chrome_image_url} alt={vehicle.model}/>
      </div>
    )
  }
}
