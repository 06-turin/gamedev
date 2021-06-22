import { AUTH_TOKEN_NAME } from 'config';
import { is } from 'typescript-is';
import { callApi } from '../utils/api-wrapper';
import {
  apiURL,
  ERROR_RESPONSE_DATA,
  LogOutResponse,
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
  UserResponse,
} from './types';

export const authAPI = {
  login: async (data: SignInRequest): Promise<SignInResponse> => {
    try {
      const response = await callApi({
        method: 'post',
        url: `${apiURL.auth}/signin`,
        data,
        authRequired: true,
      });

      if (response.data && is<SignInResponse>(response.data)) {
        localStorage.setItem(AUTH_TOKEN_NAME, 'OK');
        return response.data;
      }
      throw new Error(ERROR_RESPONSE_DATA);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  logout: async (): Promise<LogOutResponse> => {
    try {
      const response = await callApi({
        method: 'post',
        url: `${apiURL.auth}/logout`,
        authRequired: false,
      });

      if (response.data && is<LogOutResponse>(response.data)) {
        localStorage.removeItem(AUTH_TOKEN_NAME);
        return response.data;
      }
      throw new Error(ERROR_RESPONSE_DATA);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  register: async (data: SignUpRequest): Promise<SignUpResponse> => {
    try {
      const response = await callApi({
        method: 'post',
        url: `${apiURL.auth}/signup`,
        data,
        authRequired: true,
      });

      if (response.data && is<SignUpResponse>(response.data)) {
        if (response.data.id) {
          localStorage.setItem(AUTH_TOKEN_NAME, 'OK');
        }
        return response.data;
      }
      throw new Error(ERROR_RESPONSE_DATA);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  isAuth: (): Boolean => {
    const token = localStorage.getItem(AUTH_TOKEN_NAME);
    return Boolean(token);
  },

  getUserInfo: async (): Promise<UserResponse> => {
    try {
      const response = await callApi({
        method: 'get',
        url: `${apiURL.auth}/user`,
        authRequired: true,
      });

      if (response.data && is<UserResponse>(response.data)) {
        return response.data;
      }
      throw new Error(ERROR_RESPONSE_DATA);
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
