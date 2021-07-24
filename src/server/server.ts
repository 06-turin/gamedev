import path from 'path';
import express, { RequestHandler } from 'express';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import webpack, { Configuration } from 'webpack';
import config from '../../webpapck/client.config';
import { serverRenderMiddleware } from './serverRenderMiddleware';

function getWebpackMiddlewares(conf: Configuration): RequestHandler[] {
  const compiler = webpack({ ...conf, mode: 'development' });

  return [
    devMiddleware(compiler, {
      publicPath: '/',
    }),
    hotMiddleware(compiler, { path: '/__webpack_hmr' }),
  ];
}

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.get(['/*'], [...getWebpackMiddlewares(config)], serverRenderMiddleware);

export { app };
