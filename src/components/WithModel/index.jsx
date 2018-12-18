import React, { Component } from 'react'

const WithModel = (loadModel, LoadingComponent = null, ErrorComponent = null) => (ComponentToRender) => {
  return class ModelWrap extends Component {
    state = { error: null, isLoading: true }

    componentDidMount () {
      this.resolveModel()
    }

    resolveModel = async () => {
      try {
        await loadModel(this.props)
        this.setState({ isLoading: false })
      } catch (e) {
        this.setState({ error: true })
        if (e) console.error(e)
      }
    }

    render () {
      const { error, isLoading } = this.state
      if (error) return ErrorComponent ? <ErrorComponent /> : null
      if (isLoading) return LoadingComponent ? <LoadingComponent /> : null
      return <ComponentToRender {...this.props} />
    }
  }
}

export default WithModel;