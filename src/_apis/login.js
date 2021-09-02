import instance from './instance';

export const login = async (
  email,
  password,
) => {
  return await instance.post(
    'login/',
    {
      email,
      password
    }
  ).then((response) => response.data)
  .catch((error) => {throw error});
}

export const register = async (
  username,
  email,
  role,
  password,
  password_repeat
) => {
  return await instance.post(
    'sign-up/',
    {
      username,
      email,
      role,
      password,
      password_repeat
    }
  ).then((response) => response.data)
  .catch((error) => {throw error});
}

export const roles = async (
) => {
  return await instance.get(
    'roles/',
  ).then((response) => response.data)
  .catch((error) => {throw error});
}