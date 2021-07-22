import path from 'path';
import express, {
// RequestHandler,
} from 'express';
import webpack from 'webpack';
import { serverRenderMiddleware } from './serverRenderMiddleware';
import config from '../../webpapck/client.config';

const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const port = process.env.PORT || 8080;

const compiler = webpack(config);

// Если следующую строчку закомментить, то сервер не падает с ошибкой
app.use(webpackDevMiddleware(compiler));

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/*', serverRenderMiddleware);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port ', port);
});
