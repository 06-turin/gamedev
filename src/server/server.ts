import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { serverRenderMiddleware } from './serverRenderMiddleware';
import config from '../../webpapck/client.config';

const app = express();
const port = process.env.PORT || 8080;

const compiler = webpack({ ...config, mode: 'development' });

app.use(express.static(path.join(__dirname, '../dist')));
app.use(webpackDevMiddleware(compiler, {
  publicPath: '/',
  serverSideRender: true,
  stats: 'detailed',
}));
app.use(webpackHotMiddleware(compiler, { path: '/__webpack_hmr' }));

app.get(['/', '/leaderboard', '/profile'], serverRenderMiddleware);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port ', port);
});
