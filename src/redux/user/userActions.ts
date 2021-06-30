import { createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from 'api/auth';
import { SignInRequest } from 'api/types';

export const getUserInfoAsync = createAsyncThunk(
  'user/getUserInfoAsync',
  async () => {
    const userInfo = await authAPI.getUserInfo();
    return userInfo;
  },
);

export const loginAsync = createAsyncThunk(
  'user/loginAsync',
  async (data: SignInRequest) => {
    const result = await authAPI.login(data);
    return result;
  },
);

export const logoutAsync = createAsyncThunk(
  'user/logoutAsync',
  async () => {
    const result = await authAPI.logout();
    return result;
  },
);
