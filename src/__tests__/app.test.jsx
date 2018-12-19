/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import * as ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Routes from '../routes';

configure({ adapter: new Adapter() })

describe('App/', () => {
  it('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Routes />, div);
  })

  it('snapshot', () => {
    expect(shallow(<Routes />)).toMatchSnapshot();
  })
})
