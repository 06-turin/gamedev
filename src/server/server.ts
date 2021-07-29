import path from 'path';
import express from 'express';
import config from '../../webpackConfigs/client.config';
// import { storeMiddleware } from './middlewares/storeMiddleware';
// import { testDispatchMiddleware } from './middlewares/testDispatchMiddleware';
import { IndexController } from './controllers/IndexController';
import { webpackMiddlewares } from './middlewares/webpackMiddleware';

const app = express();

app
  // .use(storeMiddleware)
  // .use(testDispatchMiddleware)
  .use(express.static(path.join(__dirname, '../dist')));

app.get(['/*'], webpackMiddlewares(config), IndexController.index);

export { app };
