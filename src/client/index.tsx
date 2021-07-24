/* eslint-disable no-underscore-dangle */
import 'styles/styles.css';
import '../i18n';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/organisms/App/App';
import { createStore } from 'store/store';
import isServer from 'utils/server/isServerEnvCheker';
// import { startServiceWorker } from './serviceWorker';

const initialState = !isServer && window.__PRELOADED_STATE__ ? window.__PRELOADED_STATE__ : {};
if (!isServer && window.__PRELOADED_STATE__) {
  delete window.__PRELOADED_STATE__;
}

export const store = createStore(initialState);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

if (!isServer) {
  ReactDOM.hydrate(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
}

// startServiceWorker();
