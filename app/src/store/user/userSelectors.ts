import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

const selectUser = (state: RootState) => state.user;

export const selectUserInfo = createSelector(
  selectUser,
  (user) => user.userInfo,
);

export const selectIsAuth = createSelector(
  selectUser,
  (user) => user.isAuth,
);

export const selectTheme = createSelector(
  selectUser,
  (user) => user.theme,
);
