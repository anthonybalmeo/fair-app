import React, { Component } from 'react';
import CarBlock from '../components/CarBlock'
import WithLoading from '../components/WithLoading'
const CarBlockWithLoading = WithLoading(CarBlock)

export default class CarListing extends Component {
  constructor (props) {
    super(props);
    this.state = {
      vehicles: null,
      loading: false,
    }
  }

  loadVehicles = (page) => {
    fetch(`https://private-4e19e-interviewapi3.apiary-mock.com/vehicles?page=${page}`)
    .then(response => response.json())
    .then(dataResponse => {
      const {
        vehicles,
      } = dataResponse.data
      this.setState({loading: false, vehicles})
    })
  }

  componentDidMount () {
    this.setState({ loading: true });
    this.loadVehicles(1)
  }

  render () {
    const { vehicles } = this.state
    return (
      <div className='CarListing'>
        <CarBlockWithLoading isLoading={this.state.loading} vehicles={vehicles} />
      </div>
    )
  }
}

// {
//   vehicles.map(vehicle =>  {
//     <CarBlock vehicle={vehicle} />
//   })
// }