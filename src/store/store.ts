import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { leaderboardReducer } from 'store/leaderboard/leaderboardSlice';
import { connectRouter } from 'connected-react-router';
import { History, createBrowserHistory, createMemoryHistory } from 'history';
import { isServer } from 'utils/ssrUtils';
import { requestStatusReducer } from './requestStatus/requestStatusSlice';
import { userReducer } from './user/userSlice';

declare global {
  interface Window {
      __INITIAL_STATE__: any;
  }
}

// eslint-disable-next-line no-underscore-dangle
const initialState = isServer ? undefined : window.__INITIAL_STATE__;

const history = isServer
  ? createMemoryHistory({ initialEntries: ['/'] })
  : createBrowserHistory();

export const createRootReducer = (hist: History) => combineReducers({
  router: connectRouter(hist),
  user: userReducer,
  requestStatus: requestStatusReducer,
  leaderboard: leaderboardReducer,
});

export const store = configureStore({
  reducer: createRootReducer(history),
  // eslint-disable-next-line no-underscore-dangle
  preloadedState: initialState,
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
