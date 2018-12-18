import React, { Component } from 'react';

export default class CarDetailsPage extends Component {
  render () {
    debugger
    const { vehicle } = this.props
    return (
      <div>
        {vehicle.model}
      </div>
    )
  }
}
