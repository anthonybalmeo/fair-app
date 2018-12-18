import { connect } from 'react-redux'
import { compose } from 'redux'
import CarDetailsPage from '../components/CarDetailsPage'
import WithModel from '../components/WithModel'
import store from '../store'
import { fetchVehicleByVin } from '../store/actions'

const loadModel = async (props) => {
  const { vehicleVin } = props
  await store.dispatch(fetchVehicleByVin(vehicleVin))
}

const routerProps = (state, ownProps) => ({
  vehicleVin: ownProps.match.params.vehicleVin,
})

const mapStateToProps = (state, ownProps) => ({
  vehicle: state.vehicle,
})

export default compose(
  connect(routerProps),
  WithModel(loadModel),
  connect(mapStateToProps)
)(CarDetailsPage)
