import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { AppContainer } from 'react-hot-loader'
import Routes from './routes'

const renderApp = (Component) => {
  ReactDOM.render(
      <Provider store={store} >
        <AppContainer>
          <Component/>
        </AppContainer>
      </Provider>,
    document.getElementById('app')
  );
};

renderApp(Routes);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./routes', () => {
    renderApp(require('./routes').default);
  })
}
