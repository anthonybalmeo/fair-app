import { connect } from 'react-redux'
import { compose } from 'redux'
import CarListingPage from '../components/CarListingPage'
import WithModel from '../components/WithModel'
import store from '../store'
import { fetchVehicleByPage, saveFavoriteVehicles, removeFavoriteVehicles } from '../store/actions'

const loadModel = async (props) => {
  const { pageId } = props
  await store.dispatch(fetchVehicleByPage(pageId))
}

const routerProps = (state, ownProps) => ({
  pageId: ownProps.match.params.page,
})

const mapStateToProps = (state) => {
  const {
    vehicles,
    favoriteVehicles,
  } = state;
  
  const vehicleWithFavorites = vehicles.map(car => {
    return ({
      ...car,
      isFavorite: favoriteVehicles.length > 0 && favoriteVehicles.find((({vin}) => vin === car.id)) && Object.keys(favoriteVehicles.find((({vin}) => vin === car.id))).length > 0
    })
  })

  return ({
    vehicles: vehicleWithFavorites,
  })
}

const mapDispatchToProps = (dispatch) => ({
  saveFavoriteVehicles: (vin) => {
    dispatch(saveFavoriteVehicles(vin))
  },
  removeFavoriteVehicles: (vin) => {
    dispatch(removeFavoriteVehicles(vin))
  },
})

export default compose(
  connect(routerProps),
  WithModel(loadModel),
  connect(mapStateToProps, mapDispatchToProps)
)(CarListingPage)
