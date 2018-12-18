import { connect } from 'react-redux'
import { compose } from 'redux'
import CarListingPage from '../components/CarListingPage'
import WithModel from '../components/WithModel'
import store from '../store'
import { fetchVehicleByPage } from '../store/actions'

const loadModel = async (props) => {
  const { pageId } = props
  await store.dispatch(fetchVehicleByPage(pageId))
}

const routerProps = (state, ownProps) => ({
  pageId: ownProps.match.params.page,
})

const mapStateToProps = (state) => ({
  vehicles: state.vehicles,
})

export default compose(
  connect(routerProps),
  WithModel(loadModel),
  connect(mapStateToProps)
)(CarListingPage)
