import { connect } from 'react-redux'
import { compose } from 'redux'
import { saveVehicles } from '../store/actions'
import CarListingPage from '../components/CarListingPage'
import WithModel from '../components/WithModel'
import store from '../store'
import { withRouter } from 'react-router'

export const loadVehicles = (pageId, dispatch) => {
  return fetch(`https://private-4e19e-interviewapi3.apiary-mock.com/vehicles?page=${pageId}`)
  .then(response => response.json())
  .then(dataResponse => {
    const {
      vehicles,
    } = dataResponse.data
    dispatch(saveVehicles(vehicles))
  })
}

const loadModel = async (props) => {
  const { pageId } = props
  await loadVehicles(pageId, store.dispatch)
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
