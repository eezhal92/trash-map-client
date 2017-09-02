import { createStore, compose } from 'redux';

import rootReducer from './reducer';

const configureStore = (initialState = {}) => {
  const enhancers = [];

  if (process.env.NODE_ENV === 'development') {
    enhancers.push(
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    );
  }

  const store = createStore(rootReducer, initialState, compose(...enhancers));

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      /* eslint-disable global-require */
      const nextReducer = require('./reducer').default;

      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

export default configureStore;
