/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'
import { LoadingScreen } from '../index'
import renderer from 'react-test-renderer'

configure({ adapter: new Adapter() })

describe('LoadingScreen/', () => {
  it('snapshots with a message', () => {
    const Component = LoadingScreen('This is a message for loading')
    const tree = renderer.create(<Component />)
    tree.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('snapshots without a message', () => {
    const Component = LoadingScreen()
    const tree = renderer.create(<Component />)
    tree.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
