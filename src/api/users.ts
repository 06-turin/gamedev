// import to from 'await-to-js';
import { is } from 'typescript-is';
import { callApi } from './api-wrapper';
import {
  ERROR_RESPONSE_DATA,
  UserRequest,
  UserResponse,
} from './types';

export const usersAPI = {
  update: async (data: UserRequest): Promise<UserResponse> => {
    try {
      const response = await callApi({
        method: 'put',
        url: '/user/profile',
        data,
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
