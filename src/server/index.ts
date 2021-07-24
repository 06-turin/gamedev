import express from 'express';
import path from 'path';
import compression from 'compression';
import '../i18n';
import cookieParser from 'cookie-parser';
import { serverStoreMiddleware } from './middlewares/storeMiddleware';
import IndexController from './controllers/IndexController';
import { setAuthMiddleware } from './middlewares/setAuthMiddleware';

const app = express();

app
  .use(compression())
  .use(cookieParser())
  .use(serverStoreMiddleware)
  .use(setAuthMiddleware)
  .use(express.static(path.resolve(__dirname, '../dist')))
  .use(express.static(path.resolve(__dirname, '../static')));

app.get('/*', IndexController.renderApp);

export { app };
