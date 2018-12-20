/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SliderComponent from '../';
import { BrowserRouter as Router } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('SliderComponent', () => {
  let props = null;

  beforeEach(() => {
    props = {
      updateMonthlyVehiclepaymentsPerMiles: jest.fn(),
      monthlyPayments: 290,
      miles: 100000,
    }
  })

  it('renders correctly', () => {
    const component = 
    <Router>
      <SliderComponent {...props} />
    </Router>;
    const tree = shallow(component);
    expect(tree).toMatchSnapshot();
  })

  it('renders SliderComponent', () => {
    const component = 
      <Router>
        <SliderComponent {...props} />
      </Router>;
    const tree = mount(component);
    const endLinks = 2
    expect(tree.find('[data-test-id="slider-component"]').length).toEqual(1);
  });
});
