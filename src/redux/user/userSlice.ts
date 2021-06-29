import { createSlice } from '@reduxjs/toolkit';
import { UserResponse } from 'api/types';
import { RootState } from 'redux/store';
import { getUserInfoAsync } from './thunks';

type UserState = {
    userInfo: UserResponse
}

const initialState: UserState = {
  userInfo: {} as UserResponse,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getUserInfoAsync.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
  },
});

export const userReducer = userSlice.reducer;

export const selectUserInfo = (state: RootState) => state.user.userInfo;
