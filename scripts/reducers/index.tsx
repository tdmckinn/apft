/// <reference path="../../typings/redux/redux.d.ts" />

import { combineReducers } from 'redux';
import { apft } from './Apft';

const rootReducer = combineReducers({
  apft
});

export default rootReducer;
