import './styles/styles.css';
import React, { Suspense } from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { ConnectedRouter } from 'connected-react-router';
import { App } from './components/organisms/App/App';
import './i18n';
import { history } from './redux/store';

hydrate(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
