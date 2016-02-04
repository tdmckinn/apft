'use strict';

import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

export default function configureStore(appReducers) {

  const createStoreWithMiddlesware = applyMiddleware(
    thunkMiddleware
  )(createStore);

  return createStoreWithMiddlesware(appReducers);
}
