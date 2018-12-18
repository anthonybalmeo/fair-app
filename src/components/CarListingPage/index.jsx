import React, { Fragment, Component } from 'react';
import CarBlock from '../CarBlock'

export default class CarListingPage extends Component {
  render () {
    const { vehicles } = this.props
    return (
      <div className='wrapper'>
        {
          vehicles.map((vehicle, i) => <CarBlock vehicle={vehicle} key={i} />)
        }
      </div>
    )
  }
}
