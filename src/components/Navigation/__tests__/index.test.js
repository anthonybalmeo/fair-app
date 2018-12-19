/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navigation from '../';
import { BrowserRouter as Router } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('Navigation', () => {
  it('renders correctly', () => {
    const component = 
    <Router>
      <Navigation />
    </Router>
    const tree = shallow(component)
    expect(tree).toMatchSnapshot()
  })
});
