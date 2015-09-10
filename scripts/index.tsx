/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/redux/redux.d.ts" />

/**
 * Essentially the root of the application 
 */
import * as React from 'react';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';
import { loadCsvData } from './actions/index';

const store = configureStore();

// lets load the csv data upfront and use papa-parse to do the heavy lifting
store.dispatch(loadCsvData());

function initReactApp() {
  React.render(
    <Provider store={store}>
      {() => <App />}
    </Provider>
    , document.getElementById('root'));
}

if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', initReactApp);
}
