/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CarDetailsPage from '../';
import { vehicleWithFavorite1 } from '../../../fixtures/test-mock-variables';
import { BrowserRouter as Router } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('CarDetailsPage', () => {
  let props = null;

  beforeEach(() => {
    props = {
      payments: { monthly: 290 },
      vehicle: vehicleWithFavorite1,
      saveFavoriteVehicles: jest.fn(),
      removeFavoriteVehicles: jest.fn(),
      updateMonthlyVehiclepaymentsPerMiles: jest.fn(),
    }
  })

  it('renders correctly', () => {
    const component = 
      <Router>
        <CarDetailsPage {...props} />
      </Router>;
    const tree = shallow(component);
    expect(tree).toMatchSnapshot();
  })

  it('renders CarDetailsPage', () => {
    const component = 
      <Router>
        <CarDetailsPage {...props} />
      </Router>;
    const tree = mount(component);
    expect(tree.find('[data-test-id="car-details-page"]').length).toEqual(1);
  });
});
