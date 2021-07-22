import path from 'path';
import { Configuration } from 'webpack';
// import nodeExternals from 'webpack-node-externals';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import fileLoader from './loaders/file';
import cssLoader from './loaders/css';
import jsLoader from './loaders/js';
import { DIST_DIR, SRC_DIR, IS_DEV } from './env';

const config: Configuration = {
  name: 'server',
  target: 'node',
  node: { __dirname: false },
  entry: path.join(SRC_DIR, 'server/server'),
  module: {
    rules: [
      jsLoader.server,
      fileLoader.server,
      cssLoader.server,
    ],
  },
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    path: DIST_DIR,
    publicPath: '/static/',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },

  devtool: 'source-map',

  performance: {
    hints: IS_DEV ? false : 'warning',
  },

  // externals: [nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })],

  optimization: { nodeEnv: false },
};

export default config;
