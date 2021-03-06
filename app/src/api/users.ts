import { is } from 'typescript-is';
import { callApi } from 'utils/api-wrapper';
import { PATHS } from './config';
import {
  ChangePasswordRequest,
  ChangePasswordResponse,
  ERROR_RESPONSE_DATA,
  GetThemeResponse,
  UserRequest,
  UserResponse,
} from './types';

export const usersAPI = {
  update: async (data: UserRequest): Promise<UserResponse> => {
    try {
      const response = await callApi({
        method: 'put',
        url: PATHS.users.updateProfile,
        data,
      });

      if (response.data && is<UserResponse>(response.data)) {
        return response.data;
      }
      throw new Error(ERROR_RESPONSE_DATA);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  changePassword: async (data: ChangePasswordRequest): Promise<ChangePasswordResponse> => {
    try {
      const response = await callApi({
        method: 'put',
        url: PATHS.users.changePassword,
        data,
      });

      if (response.data && is<ChangePasswordResponse>(response.data)) {
        return response.data;
      }
      throw new Error(ERROR_RESPONSE_DATA);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  changeAvatar: async (data: FormData): Promise<UserResponse> => {
    try {
      const response = await callApi({
        method: 'put',
        url: PATHS.users.uploadAvatar,
        data,
        formData: true,
      });

      if (response.data && is<UserResponse>(response.data)) {
        return response.data;
      }
      throw new Error(ERROR_RESPONSE_DATA);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getTheme: async (): Promise<GetThemeResponse> => {
    try {
      const response = await callApi({
        method: 'get',
        url: PATHS.users.theme,
      });

      if (response.data && is<GetThemeResponse>(response.data)) {
        return response.data;
      }
      throw new Error(ERROR_RESPONSE_DATA);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  setTheme: async (themeId: number): Promise<void> => {
    try {
      await callApi({
        method: 'put',
        url: PATHS.users.theme,
        data: { themeId },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
