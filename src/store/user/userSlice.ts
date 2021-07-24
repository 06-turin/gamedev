import {
  AnyAction, AsyncThunk, SerializedError, createSlice,
} from '@reduxjs/toolkit';
import { resourcesAPI } from 'api/resources';
import avatarDummy from 'assets/images/logo_img_base.png';
import { UserResponse } from 'api/types';
import { RootState } from 'client';
import isServer from 'utils/server/isServerEnvCheker';
import { AUTH_TOKEN_NAME } from 'api/config';
import {
  changeAvatarAsync,
  changePasswordAsync,
  getUserInfoAsync, loginAsync, logoutAsync, registerAsync, updateUserAsync,
} from './userActions';

type UserInfo = UserResponse & {
  avatarSrc?: string
}

type UserState = {
    userInfo: UserInfo,
    theme: 'light' | 'dark',
    isAuth: boolean,
    isLoading: boolean,
    isUpdatedSuccessful: boolean,
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
  isAuth: false,
  isLoading: false,
  isUpdatedSuccessful: false,
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
  if (!isServer) {
    if (auth) {
      document.cookie = `${AUTH_TOKEN_NAME}=1`;
    } else {
      document.cookie = `${AUTH_TOKEN_NAME}=0`;
    }
  }
  state.isAuth = auth;
};

const saveUserData = (state: UserState, payload: UserResponse) => {
  const avatarSrc = payload.avatar
    ? resourcesAPI.getResourceURL(payload.avatar)
    : avatarDummy;

  state.userInfo = {
    ...payload,
    avatarSrc,
  };

  setAuth(state, true);
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
    login(state) {
      setAuth(state, true);
    },
    logout(state) {
      setAuth(state, false);
    },
    update(state, action) {
      saveUserData(state, action.payload);
    },
    clearRequestState(state) {
      state.error = null;
      state.isLoading = false;
      state.isUpdatedSuccessful = false;
    },
  },
  extraReducers: (builder) => {
    // auth cases
    builder.addCase(getUserInfoAsync.fulfilled, (state, action) => {
      saveUserData(state, action.payload);
    });
    builder.addCase(getUserInfoAsync.rejected, (state) => {
      setAuth(state, false);
    });
    builder.addCase(loginAsync.fulfilled, (state) => setAuth(state, true));
    builder.addCase(logoutAsync.fulfilled, (state) => setAuth(state, false));
    builder.addCase(registerAsync.fulfilled, (state) => setAuth(state, true));

    // updated cases
    builder.addCase(updateUserAsync.fulfilled, (state, action) => {
      saveUserData(state, action.payload);
      state.isUpdatedSuccessful = true;
    });
    builder.addCase(updateUserAsync.pending, (state) => { state.isUpdatedSuccessful = false; });
    builder.addCase(changePasswordAsync.fulfilled, (state) => { state.isUpdatedSuccessful = true; });
    builder.addCase(changePasswordAsync.pending, (state) => { state.isUpdatedSuccessful = false; });
    builder.addCase(changePasswordAsync.rejected, (state) => { state.isUpdatedSuccessful = false; });
    builder.addCase(changeAvatarAsync.fulfilled, (state, action) => {
      saveUserData(state, action.payload);
      state.isUpdatedSuccessful = true;
    });
    builder.addCase(changeAvatarAsync.pending, (state) => { state.isUpdatedSuccessful = false; });
    builder.addCase(changeAvatarAsync.rejected, (state) => { state.isUpdatedSuccessful = false; });

    // global matchers
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

export const { toggleTheme, login, logout } = userSlice.actions;
export const userActions = userSlice.actions;

export const selectUserInfo = (state: RootState) => state.user.userInfo;

export const getUserState = (state: RootState): UserState => state.user;

export const userInitialState = initialState;
