// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { IS_DEV } = require('../env');

export const cssLoader = {
  client: {
    test: /\.css$/,
    use: [
      IS_DEV && 'css-hot-loader',
      'style-loader',
      // {
      //   loader: MiniCssExtractPlugin.loader,
      //   options: {
      //     esModule: false,
      //   },
      // },
      'css-loader',
      'postcss-loader',
    ],
  },
  server: {
    test: /\.css$/,
    loader: 'null-loader',
  },
};
