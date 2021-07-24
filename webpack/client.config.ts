import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import WorkboxPlugin from 'workbox-webpack-plugin';
import { DIST_DIR, SRC_DIR } from './env';
import { cssLoader } from './loaders/css';
import { fileLoader } from './loaders/file';
import { jsLoader } from './loaders/js';

type Configuration = WebpackConfiguration & {
  devServer?: WebpackDevServerConfiguration
};

const config: Configuration = {
  name: 'client',
  entry: path.join(SRC_DIR, 'client/index.tsx'),
  output: {
    path: DIST_DIR,
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [cssLoader.client, fileLoader.client, jsLoader.client],
  },
  devServer: {
    historyApiFallback: true,
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    // new HtmlWebpackPlugin({
    //   template: './www/index.html',
    // }),
    new CopyPlugin({
      patterns: [
        { from: './src/locales', to: 'locales' },
      ],
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};

export default config;
