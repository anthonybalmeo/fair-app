import React from 'react'
import renderer from 'react-test-renderer'
import withModel from '../index'

const TestComponent = () => null
const LoadingComponent = () => null
const ErrorComponent = () => null

it('renders TestComponent when model resolves', async () => {
  const loadModel = () => Promise.resolve()
  const Component = withModel(loadModel, LoadingComponent, null)(TestComponent)
  const wrapper = renderer
    .create(<Component />)
    .root

  await loadModel()
  expect(wrapper.findByType(TestComponent)).toBeTruthy()
  expect(wrapper.findAllByType(LoadingComponent).length).toBe(0)
  expect(wrapper.findAllByType(ErrorComponent).length).toBe(0)
})

it('renders ErrorComponent when model rejects', async () => {
  const loadModel = () => Promise.reject() // eslint-disable-line
  const Component = withModel(loadModel, null, ErrorComponent)(TestComponent)
  const wrapper = renderer
    .create(<Component />)
    .root

  try {
    await loadModel()
  } catch (e) {
    expect(wrapper.findByType(ErrorComponent)).toBeTruthy()
  }
})

it('renders LoadingComponent when model is not resolved', async () => {
  const loadModel = () => new Promise(() => {})
  const Component = withModel(loadModel, LoadingComponent, null)(TestComponent)
  const wrapper = renderer
    .create(<Component />)
    .root

  expect(wrapper.findByType(LoadingComponent)).toBeTruthy()
})

it('will pass through props from parent to child', async () => {
  const loadModel = () => Promise.resolve()
  const props = {
    propA: 'foo',
    propB: 'bar',
  }

  const expected = {
    propA: 'foo',
    propB: 'bar',
  }

  const Component = withModel(loadModel)(TestComponent)
  const wrapper = renderer
    .create(<Component {...props} />)
    .root

  await loadModel()
  expect(wrapper.findByProps(expected)).toBeTruthy()
})
