import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { leaderboardReducer } from 'redux/leaderboard/leaderboardSlice';
import { connectRouter } from 'connected-react-router';
import { History, createBrowserHistory, createMemoryHistory } from 'history';
import { requestStatusReducer } from './requestStatus/requestStatusSlice';
import { userReducer } from './user/userSlice';

export const isServer = !(
  typeof window !== 'undefined'
  && window.document
  && window.document.createElement
);

export const history = isServer
  ? createMemoryHistory({ initialEntries: ['/'] })
  : createBrowserHistory();

const createRootReducer = (hist: History) => combineReducers({
  router: connectRouter(hist),
  user: userReducer,
  requestStatus: requestStatusReducer,
  leaderboard: leaderboardReducer,
});

export const store = configureStore({
  reducer: createRootReducer(history),
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
