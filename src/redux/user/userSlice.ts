import { createSlice } from '@reduxjs/toolkit';
import { UserResponse } from 'api/types';
import { RootState } from 'redux/store';
import { resourcesAPI } from 'api/resources';
import avatarDummy from 'assets/images/logo_img_base.png';
import { getUserInfoAsync } from './thunks';

type UserInfo = UserResponse & {
  avatarSrc?: string
}

type UserState = {
    userInfo: UserInfo
}

const initialState: UserState = {
  userInfo: {
    id: 0,
    first_name: null,
    second_name: null,
    display_name: null,
    login: '',
    email: '',
    phone: '',
    avatar: null,
    avatarSrc: avatarDummy,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getUserInfoAsync.fulfilled, (state, action) => {
      const avatarSrc = action.payload.avatar
        ? resourcesAPI.getResourceURL(action.payload.avatar)
        : avatarDummy;

      state.userInfo = {
        ...action.payload,
        avatarSrc,
      };
    });
  },
});

export const userReducer = userSlice.reducer;

export const selectUserInfo = (state: RootState) => state.user.userInfo;
