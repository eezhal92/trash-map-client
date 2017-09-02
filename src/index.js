import React from 'react';
import { Provider } from 'react-redux';
import { render as renderDOM } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './Root';
import './assets/sass/global.scss';
import configureStore from './store';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  require('react-hot-loader/patch');
}

const mountEl = document.querySelector('#app');

const store = configureStore({ location: null, trashCoordinates: [] });

const render = (Component) => {
  renderDOM(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    mountEl,
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./Root', () => render(Root));
}
