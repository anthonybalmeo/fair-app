/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Pagination from '../';
import { BrowserRouter as Router } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('Pagination', () => {
  let props = null;

  beforeEach(() => {
    props = {
      pages: ['1', '2', '3'],
      currentPage: '1',
    }
  })

  it('renders correctly', () => {
    const component = 
    <Router>
      <Pagination {...props} />
    </Router>;
    const tree = shallow(component);
    expect(tree).toMatchSnapshot();
  })

  it('renders Pagination', () => {
    const component = 
      <Router>
        <Pagination {...props} />
      </Router>;
    const tree = mount(component);
    const endLinks = 2
    expect(tree.find('[data-test-id="pagination"]').length).toEqual(1);
    expect(tree.find('[data-test-id="page-links"]').length).toEqual(props.pages.length + endLinks);
  });
});
