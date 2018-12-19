import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CarListingPage from '../'
import { vehiclesWithFavorite } from '../../../fixtures/test-mock-variables'
import { BrowserRouter as Router } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('CarListingPage', () => {
  let props

  beforeEach(() => {
    props = {
      vehicles: vehiclesWithFavorite,
      saveFavoriteVehicles: jest.fn(),
      removeFavoriteVehicles: jest.fn(),
    }
  })


  it('renders correctly', () => {
    const component = 
    <Router>
      <CarListingPage {...props} />
    </Router>
    const tree = shallow(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders CarListingPage', () => {
    const component = 
    <Router>
      <CarListingPage {...props} />
    </Router>
    const tree = mount(component)
    expect(tree.find('[data-test-id="car-listing-page"]').length).toEqual(1)
    expect(tree.find('[data-test-id="car-block"]').length).toEqual(props.vehicles.length)
  });
});
