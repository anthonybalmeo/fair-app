import React from 'react';
import * as ReactDOM from 'react-dom';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Routes from '../routes';

configure({ adapter: new Adapter() })

describe('App/', () => {
  it('renders correctly', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Routes />, div)
  })

  it('snapshot', () => {
    expect(shallow(<Routes />)).toMatchSnapshot()
  })
})
