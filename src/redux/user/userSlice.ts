import {
  AnyAction, AsyncThunk, createSlice, SerializedError,
} from '@reduxjs/toolkit';
import { UserResponse } from 'api/types';
import { resourcesAPI } from 'api/resources';
import avatarDummy from 'assets/images/logo_img_base.png';
import { AUTH_TOKEN_NAME } from 'api/config';
import {
  getUserInfoAsync, loginAsync, logoutAsync, registerAsync,
} from './userActions';

type UserInfo = UserResponse & {
  avatarSrc?: string
}

type UserState = {
    userInfo: UserInfo,
    theme: 'light' | 'dark',
    isAuth: boolean,
    isLoading: boolean,
    error: SerializedError | null
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
  theme: 'dark',
  isAuth: Boolean(localStorage.getItem(AUTH_TOKEN_NAME)),
  isLoading: false,
  error: null,
};

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>

type PendingAction = ReturnType<GenericAsyncThunk['pending']>
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>

function isPendingAction(action: AnyAction): action is PendingAction {
  return action.type.endsWith('/pending');
}
function isRejectedAction(action: AnyAction): action is RejectedAction {
  return action.type.endsWith('/rejected');
}
function isFulfilledAction(action: AnyAction): action is FulfilledAction {
  return action.type.endsWith('/fulfilled');
}

const setAuth = (state: UserState, auth: boolean): void => {
  if (auth) {
    localStorage.setItem(AUTH_TOKEN_NAME, '1');
  } else {
    localStorage.removeItem(AUTH_TOKEN_NAME);
  }
  state.isAuth = auth;
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
    logout(state) {
      setAuth(state, false);
    },
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
    builder.addCase(loginAsync.fulfilled, (state) => setAuth(state, true));
    builder.addCase(logoutAsync.fulfilled, (state) => setAuth(state, false));
    builder.addCase(registerAsync.fulfilled, (state) => setAuth(state, true));

    builder.addMatcher(isPendingAction, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addMatcher(isRejectedAction, (state, action) => {
      state.error = action.error as SerializedError;
      state.isLoading = false;
    });
    builder.addMatcher(isFulfilledAction, (state) => {
      state.error = null;
      state.isLoading = false;
    });
  },
});

export const userReducer = userSlice.reducer;

export const { toggleTheme } = userSlice.actions;
export const userActions = userSlice.actions;

export const selectUserInfo = (state: RootState) => state.user.userInfo;

export const getUserState = (state: RootState): UserState => state.user;
