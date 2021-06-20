// import to from 'await-to-js';
import { AUTH_TOKEN_NAME } from 'config';
import { is } from 'typescript-is';
import { callApi } from './api-wrapper';
import {
  LogOutResponse, SignInRequest, SignInResponse, ERROR_RESPONSE_DATA,
} from './types';

export const auth = {
  login: async (data: SignInRequest): Promise<SignInResponse> => {
    try {
      const response = await callApi({
        method: 'post',
        url: '/auth/signin',
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
        url: '/auth/logout',
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

  isAuth: (): Boolean => {
    const token = localStorage.getItem(AUTH_TOKEN_NAME);
    return Boolean(token);
  },
};

// export { auth }

// export const ;

// export const logout = async () => {
//   const response = await callApi({
//     method: 'post',
//     url: '/auth/logout',
//     authRequired: false,
//   });

//   if (is<LogOutResponse>(response.data)) {
//     console.log('~ response.data', response.data);
//     return response.data as LogOutResponse;
//   }

//   throw new Error('Invalid response data!');
// };
