'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';
import { loadCsvData } from './actions/index';
import appReducers from './reducers';

const store = configureStore(appReducers);

// lets load the csv data upfront
store.dispatch(loadCsvData());
 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> ,
  document.getElementById('root')
 );
