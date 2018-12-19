import { connect } from 'react-redux'
import { compose } from 'redux'
import CarDetailsPage from '../components/CarDetailsPage'
import WithModel from '../components/WithModel'
import store from '../store'
import {
  fetchVehicleByVin,
  saveFavoriteVehicles,
  removeFavoriteVehicles,
  updateMonthlyVehiclePayments,
} from '../store/actions'

const loadModel = async (props) => {
  // LOAD SPECIFIC VEHICLE BY VIN
  const { vehicleVin } = props
  const { payload: { vehicle: { product_financials } } }  = await store.dispatch(fetchVehicleByVin(vehicleVin))

  // STORES INITIAL PAYMENT OPTIONS FOR SELECTED VEHICLE
  const {
    monthly_payment_cents,
  } = product_financials[0]

  const payments = {
    monthly: monthly_payment_cents/100,
  }
  store.dispatch(updateMonthlyVehiclePayments(payments))
}

// RETRIEVES DYNAMIC VIN FROM URL
const routerProps = (state, ownProps) => ({
  vehicleVin: ownProps.match.params.vehicleVin,
})

const mapStateToProps = (state) => {
  const {
    vehicle,
    favoriteVehicles,
    payments,
  } = state;
  const vehicleWithFavorite = {
    ...vehicle,
    isFavorite: favoriteVehicles.length > 0 && favoriteVehicles.find((({vin}) => vin === vehicle.id)) && Object.keys(favoriteVehicles.find((({vin}) => vin === vehicle.id))).length > 0,
  }

  return ({
    vehicle: vehicleWithFavorite,
    payments,
  })
}

const mapDispatchToProps = (dispatch) => ({
  saveFavoriteVehicles: (vin) => {
    dispatch(saveFavoriteVehicles(vin))
  },
  removeFavoriteVehicles: (vin) => {
    dispatch(removeFavoriteVehicles(vin))
  },
  updateMonthlyVehiclePayments: (payments) => {
    dispatch(updateMonthlyVehiclePayments(payments))
  }
})

export default compose(
  connect(routerProps),
  WithModel(loadModel),
  connect(mapStateToProps, mapDispatchToProps)
)(CarDetailsPage)
