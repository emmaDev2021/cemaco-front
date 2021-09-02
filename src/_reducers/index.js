import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import notifyReducer from 'react-redux-notify';

import login from './login';
import * as loginHandler from './login';

import product from './product';
import * as productHandler from './product'

export default combineReducers({
  login,
  product,
  notifications: notifyReducer,
  form: formReducer,
});

export const getToken = (state) => loginHandler.getToken(state.login);
export const getUser = (state) => loginHandler.getUser(state.login);
export const getLoading = (state) => loginHandler.getLoading(state.login);
export const getRoles = (state) => loginHandler.getRoles(state.login);

export const getProductLoading = (state) => productHandler.getLoading(state.product);
export const getPublicProducts = (state) => productHandler.getPublicProducts(state.product);
