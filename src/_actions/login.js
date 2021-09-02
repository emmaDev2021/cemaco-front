import * as types from '../_types/login';

export const authLogIn = ({
  email,
  password,
}) => ({
  type: types.AUTH_LOGIN,
  payload: {
    email,
    password,
  },
});

export const authLogInConfirm = ({
  user,
  token,
}) => ({
  type: types.AUTH_LOGIN_SUCCEEDED,
  payload: {
    user,
    token,
  }
});

export const authLogInError = ({error}) => {
  const errorMsg = error.response ? error.response.data : error.message;
  return {
    type: types.AUTH_LOGIN_FAILED,
    payload: {
      error: errorMsg
    }
  }
};

export const authLogOut = ()  => ({
  type: types.AUTH_LOGOUT,
});

export const authLogOutConfirm = () => ({
  type: types.AUTH_LOGOUT_SUCCEEDED,
});

export const authLogOutFailed = () => ({
  type: types.AUTH_LOGOUT_FAILED,
});

export const register = ({
  username,
  email,
  role,
  password,
  password_repeat
}) => ({
  type: types.REGISTER_USER,
  payload: {
    username,
    email,
    role,
    password,
    password_repeat
  }
});

export const registerConfirm = () => ({
  type: types.REGISTER_USER_SUCCEEDED,
});

export const registerFailed = () => ({
  type: types.REGISTER_USER_FAILED,
});

export const getRoles = () => ({
  type: types.GET_ROLES
});

export const getRolesConfirm = ({
  roles
}) => ({
  type: types.GET_ROLES_SUCCEEDED,
  payload: {
    roles
  }
});

export const getRolesFailed = () => ({
  type: types.GET_ROLES_FAILED
});