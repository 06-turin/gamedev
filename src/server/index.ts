import express from 'express';
import path from 'path';
import compression from 'compression';
// import 'babel-polyfill';
import '../i18n';
import { serverStoreMiddleware } from './middlewares/store/storeMiddleware';
import IndexController from './controllers/IndexController';

const app = express();

app.use(compression())
  .use(serverStoreMiddleware)
  .use(express.static(path.resolve(__dirname, '../dist')))
  .use(express.static(path.resolve(__dirname, '../static')));

app.get('/*', IndexController.renderApp);

export { app };
