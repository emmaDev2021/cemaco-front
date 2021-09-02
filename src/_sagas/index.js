import {fork, all} from 'redux-saga/effects';
import LoginSaga from './login';
import productSaga from './product';

function* mainSaga() {
  yield all([
    fork(LoginSaga),
    fork(productSaga),
  ])
}
  
export default mainSaga;