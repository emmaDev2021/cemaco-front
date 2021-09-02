import * as types from '../_types/login';

const defaultAuth = {
  user: null,
  token: null,
  loading: false,
  roles: []
}

const login = (state = defaultAuth,action) => {
  switch(action.type){
    case types.AUTH_LOGIN: {
        return {
            ...state,
            loading: true,
        }
    }
    case types.AUTH_LOGIN_SUCCEEDED: {
        const {
            user,
            token,
        } = action.payload;
        return {
            ...state,
            user,
            token,
            loading: false,
        }
    }
    case types.AUTH_LOGIN_FAILED: {
        return {
            ...state,
            user: null,
            token: null,
            loading: false,
        }
    }
    case types.AUTH_LOGIN_CLEARMSG: {
        return {
            ...state,
            error: null,
        }
    }
    case types.AUTH_LOGOUT: {
        return {
            ...state,
            loading: true,
        };
    }
    case types.AUTH_LOGOUT_SUCCEEDED: {
        return {
            ...defaultAuth,
        }
    }
    case types.AUTH_LOGOUT_FAILED: {
        return {
            ...state,
            loading: false,
        }
    }
    case types.REGISTER_USER: {
        return {
            ...state,
            loading: true,
        }
    }
    case types.REGISTER_USER_SUCCEEDED: {
        return {
            ...state,
            loading: false,
        }
    }
    case types.REGISTER_USER_FAILED: {
        return {
            ...state,
            loading: false,
        }
    }
    case types.GET_ROLES: {
        return {
            ...state,
            loading: true,
        }
    }
    case types.GET_ROLES_SUCCEEDED: {
        const {
            roles
        } = action.payload;
        return {
            ...state,
            roles: [
                {id: null, name: ''},
                ...roles
            ],
            loading: false,
        }
    }
    case types.GET_ROLES_FAILED: {
        return {
            ...state,
            loading: false,
        }
    }
    default:
      return state;
  }
}

export default login;

export const getToken = (state) => state.token;
export const getUser = (state) => state.user;
export const getLoading = (state) => state.loading;
export const getRoles = (state) => state.roles;