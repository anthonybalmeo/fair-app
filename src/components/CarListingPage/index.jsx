import React, { Fragment, Component } from 'react';
import CarBlock from '../CarBlock'

export default class CarListingPage extends Component {
  render () {
    const { vehicles } = this.props
    return (
      <div className='wrapper'>
        <div className='row'>
        {  
          vehicles.map((vehicle, i) => (
            <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4' key={i}>
              <CarBlock vehicle={vehicle} key={i} />
            </div>
          ))
        }
        </div>
      </div>
    )
  }
}
