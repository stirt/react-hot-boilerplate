import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import '../scss/index.scss';

const rootEl = document.getElementById('root');
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./app', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    // eslint-disable-next-line
    const NextApp = require('./app').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}
