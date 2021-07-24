import { Configuration } from 'webpack';
// import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import nodeExternals from 'webpack-node-externals';
import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import CopyPlugin from 'copy-webpack-plugin';
// import WorkboxPlugin from 'workbox-webpack-plugin';
import { DIST_DIR, SRC_DIR } from './env';
import { cssLoader } from './loaders/css';
import { fileLoader } from './loaders/file';
import { jsLoader } from './loaders/js';

// type Configuration = WebpackConfiguration & {
//   devServer?: WebpackDevServerConfiguration
// }

const config: Configuration = {
  name: 'server',
  entry: path.join(SRC_DIR, 'server/index.ts'),
  target: 'node',
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    path: DIST_DIR,
    publicPath: '/static/',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [cssLoader.server, fileLoader.server, jsLoader.server],
  },
  // devServer: {
  //   historyApiFallback: true,
  // },

  devtool: 'source-map',

  externalsPresets: { node: true },

  externals: [
    nodeExternals({
      allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i],
    }),
  ] as Configuration['externals'], // fix webpack 5 problem with @types/webpack-node-externals
  // https://githubmemory.com/repo/liady/webpack-node-externals/issues/105
};

export default config;
