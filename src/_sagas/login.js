import {
  put,
  takeLatest,
  call,
  delay,
} from 'redux-saga/effects';
import {createNotification} from 'react-redux-notify';
import {reset} from 'redux-form';
import * as types from '../_types/login';
import * as actions from '../_actions/login';
import * as api from '../_apis/login';
import {  
  successAlert,
  errorAlert,
} from '../_actions/alerts';

function* doLogIn(action) {
  const {
    payload: {
      email,
      password,
    },
  } = action; 
  try {
    const response = yield call(
      api.login,
      email,
      password,
    );
    console.log(response)
    yield put(actions.authLogInConfirm({
      user: response.user,
      token: response.token,
    }));
  } catch (error) {
    const errorMsg = error.response ? error.response.data.msg : error.message;
    yield put(createNotification(errorAlert(errorMsg)));
    yield put(actions.authLogInError({
      error: error.message,
    }));
  }
}

function* authLogOut() {
  try {
    /*yield call(
      api.logOut,
    );*/
    yield  put(actions.authLogOutConfirm())
  } catch (error) {
    const errorMsg = error.response ? error.response.data.msg : error.message;
    yield put(createNotification(errorAlert(errorMsg)));
    yield put(actions.authLogOutFailed({
      error: error.message,
    }));
  }
}

function* register(action) {
  try{
    const {
      payload: {
        username,
        email,
        role,
        password,
        password_repeat
      },
    } = action;
    const response = yield call(
      api.register,
      username,
      email,
      role,
      password,
      password_repeat
    );
    yield put(actions.registerConfirm({
      msg: response
    }));
    yield put(reset('RegisterForm'));
    yield put(createNotification(successAlert("Usuario Registrado!")));
    yield delay(1000)
    window.location.href='/login';
  } catch (error) {
    const errorMsg = error.response ? error.response.data.msg : error.message;
    yield put(createNotification(errorAlert(errorMsg)));
    yield put(actions.registerFailed({
      error: error.message,
    }));
  }
}

function* getRoles(){
  try{
    const response = yield call(
      api.roles
    )
    yield put(actions.getRolesConfirm({
      roles: response
    }));
  }catch(error){
    const errorMsg = error.response ? error.response.data.msg : error.message;
    yield put(createNotification(errorAlert(errorMsg)));
    yield put(actions.getRolesFailed({
      error: error.message,
    }));
  }
}

function* LoginSaga() {
  yield takeLatest(
    types.AUTH_LOGIN,
    doLogIn,
  );
  yield takeLatest(
    types.AUTH_LOGOUT,
    authLogOut,
  );
  yield takeLatest(
    types.REGISTER_USER,
    register
  );
  yield takeLatest(
    types.GET_ROLES,
    getRoles
  );
}

export default LoginSaga;