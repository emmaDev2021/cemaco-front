import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import configureStore from './store.js';
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'react-redux-notify/dist/ReactReduxNotify.css';

const storeConfig = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={storeConfig.store}>
    <PersistGate loading={null} persistor={storeConfig.persistor}>
      <BrowserRouter history={history}>
        <App/>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

