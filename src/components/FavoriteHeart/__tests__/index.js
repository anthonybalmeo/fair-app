/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FavoriteHeart from '../';
import { BrowserRouter as Router } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('FavoriteHeart', () => {
  let props = null;

  beforeEach(() => {
    props = {
      id: '123',
      defaultFavorite: true,
      saveFavoriteVehicles: jest.fn(),
      removeFavoriteVehicles: jest.fn(),
    }
  })

  it('renders correctly', () => {
    const component = 
    <Router>
      <FavoriteHeart {...props} />
    </Router>;
    const tree = shallow(component);
    expect(tree).toMatchSnapshot();
  })

  it('renders FavoriteHeart', () => {
    const component = 
      <Router>
        <FavoriteHeart {...props} />
      </Router>;
    const tree = mount(component);
    expect(tree.find('[data-test-id="favorite-heart"]').length).toEqual(1);
  });
});
