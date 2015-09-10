/// <reference path="../../typings/redux/redux.d.ts" />
/// <reference path="../../typings/redux-thunk/redux-thunk.d.ts" />

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import * as thunkMiddleware from "redux-thunk";

const createStoreWithMiddlesware: Function = applyMiddleware(
  thunkMiddleware
)(createStore);

export default function configureStore(initialState) {
   return createStoreWithMiddleware(rootReducer, initialState);
}
