import React, { Component } from 'react';
import CarBlock from '../CarBlock'

export default class CarListingPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      vehicles: null,
      loading: false,
    }
  }

  render () {
    const { vehicles } = this.props
    return (
      <div>
        {
          vehicles.map((vehicle, i) => <CarBlock vehicle={vehicle} key={i} />)
        }
      </div>
    )
  }
}
