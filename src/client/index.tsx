import 'styles/styles.css';
import '../i18n';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { App } from 'components/organisms/App/App';
import { startServiceWorker } from './serviceWorker';

ReactDOM.hydrate(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

startServiceWorker();
