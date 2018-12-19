/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CarBlock from '../';
import { vehicleWithFavorite1 } from '../../../fixtures/test-mock-variables';
import { BrowserRouter as Router } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('CarBlock', () => {
  let props = null;

  beforeEach(() => {
    props = {
      vehicle: vehicleWithFavorite1,
      saveFavoriteVehicles: jest.fn(),
      removeFavoriteVehicles: jest.fn(),
    }
  })

  it('renders correctly', () => {
    const component = 
    <Router>
      <CarBlock {...props} />
    </Router>;
    const tree = shallow(component);
    expect(tree).toMatchSnapshot();
  })

  it('renders CarBlock', () => {
    const component = 
      <Router>
        <CarBlock {...props} />
      </Router>;
    const tree = mount(component);
    expect(tree.find('[data-test-id="car-block"]').length).toEqual(1);
    expect(tree.find(`[data-test-id="${props.vehicle.id}-favorite-checkbox-label"]`).length).toEqual(1);
    expect(tree.find(`[data-test-id="${props.vehicle.id}-favorite-checkbox-input"]`).length).toEqual(1);
  });
});
