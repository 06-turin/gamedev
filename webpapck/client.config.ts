import { Configuration } from 'webpack';
import path from 'path';
import CopyPlugin from 'copy-webpack-plugin';
// import WorkboxPlugin from 'workbox-webpack-plugin';
import { DIST_DIR, SRC_DIR } from './env';
import fileLoader from './loaders/file';
import cssLoader from './loaders/css';
import jsLoader from './loaders/js';

const config: Configuration = {
  entry: path.join(SRC_DIR, 'index'),
  // entry: ([
  //   // IS_DEV && 'webpack-hot-middleware/client',
  //   path.join(SRC_DIR, 'index'),
  // ].filter(Boolean) as unknown) as Entry,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: [SRC_DIR, 'node_modules'],
    extensions: ['.tsx', '.ts', '.js'],
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
    // new WorkboxPlugin.GenerateSW({
    //   clientsClaim: true,
    //   skipWaiting: true,
    // }),
  ],
};

export default config;
