'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';
import { loadCsvData } from './actions/index';
import appReducers from './reducers';

const store = configureStore(appReducers);

// lets load the csv data upfront and use papa-parse to do the heavy lifting
store.dispatch(loadCsvData());

function initReactApp() {
  render(
    <Provider store={store}>
      {() => <App />}
    </Provider>
    , document.getElementById('root'));
}

if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', initReactApp);
}
