import { Configuration, Entry, HotModuleReplacementPlugin } from 'webpack';
import path from 'path';
import CopyPlugin from 'copy-webpack-plugin';
// import WorkboxPlugin from 'workbox-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { DIST_DIR, SRC_DIR, IS_DEV } from './env';
import fileLoader from './loaders/file';
import cssLoader from './loaders/css';
import jsLoader from './loaders/js';

const config: Configuration = {
  name: 'client',
  target: 'web',
  entry: ([
    IS_DEV && 'react-hot-loader/patch',
    // Entry для работы HMR
    IS_DEV && 'webpack-hot-middleware/client',
    IS_DEV && 'css-hot-loader/hotModuleReplacement',
    path.join(SRC_DIR, 'index'),
  ].filter(Boolean) as unknown) as Entry,
  output: {
    path: DIST_DIR,
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    modules: [SRC_DIR, 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      jsLoader.client,
      fileLoader.client,
      cssLoader.client,
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.join(SRC_DIR, 'locales'), to: 'locales' },
      ],
    }),
    new HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    // new WorkboxPlugin.GenerateSW({
    //   clientsClaim: true,
    //   skipWaiting: true,
    // }),
  ],
  devtool: 'source-map',
};

export default config;
