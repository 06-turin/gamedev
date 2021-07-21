import express from 'express';
import path from 'path';
import compression from 'compression';
// import 'babel-polyfill';
import { ServerRenderMiddleware } from './middlewares/render';
import '../i18n';

const app = express();

app.use(compression())
  .use(express.static(path.resolve(__dirname, '../dist')))
  .use(express.static(path.resolve(__dirname, '../static')));

app.get('/*', ServerRenderMiddleware);

export { app };
