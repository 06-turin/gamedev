import { configureStore } from '@reduxjs/toolkit';
import { leaderboardReducer } from 'store/leaderboard/leaderboardSlice';
import { requestStatusReducer } from './requestStatus/requestStatusSlice';
import { userReducer } from './user/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    requestStatus: requestStatusReducer,
    leaderboard: leaderboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
