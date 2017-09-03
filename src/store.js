import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from './reducers';

const configureStore = (initialState = {}) => {
  const enhancers = [
    applyMiddleware(thunk),
  ];

  if (process.env.NODE_ENV === 'development') {
    enhancers.push(
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    );
  }

  const store = createStore(rootReducer, initialState, compose(...enhancers));

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      /* eslint-disable global-require */
      const nextReducer = require('./reducers').default;

      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

export default configureStore;
