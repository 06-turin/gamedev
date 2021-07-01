import { RootState } from 'redux/store';

export const selectUserInfo = (state: RootState) => state.user.userInfo;
export const selectIsAltThemeOn = (state: RootState) => state.user.isAltThemeOn;
