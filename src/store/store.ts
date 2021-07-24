/* eslint-disable no-underscore-dangle */
import { configureStore } from '@reduxjs/toolkit';
import { leaderboardReducer } from 'store/leaderboard/leaderboardSlice';
import { requestStatusReducer } from './requestStatus/requestStatusSlice';
import { userReducer } from './user/userSlice';

export const createStore = (initialState?: object) => configureStore({
  reducer: {
    user: userReducer,
    requestStatus: requestStatusReducer,
    leaderboard: leaderboardReducer,
  },
  preloadedState: initialState,
});
