import { connect } from 'react-redux'
import { compose } from 'redux'
import { saveVehicle } from '../store/actions'
import CarDetailsPage from '../components/CarDetailsPage'
import WithModel from '../components/WithModel'
import store from '../store'

export const loadVehicle = (vehicleVin, dispatch) => {
  return fetch(`https://private-4e19e-interviewapi3.apiary-mock.com/vehicles/${vehicleVin}`)
  .then(response => response.json())
  .then(dataResponse => {
    const {
      vehicle,
    } = dataResponse.data
    dispatch(saveVehicle(vehicle))
  })
}

const loadModel = async (props) => {
  const { vehicleVin } = props
  await loadVehicle(vehicleVin, store.dispatch)
}

const routerProps = (state, ownProps) => ({
  vehicleVin: ownProps.match.params.vehicleVin,
})

const mapStateToProps = (state) => ({
  vehicle: state.vehicle,
})

export default compose(
  connect(routerProps),
  WithModel(loadModel),
  connect(mapStateToProps)
)(CarDetailsPage)
