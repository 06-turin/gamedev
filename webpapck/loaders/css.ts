import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  client: {
    test: /\.css$/,
    use: [
      // ADD IS_DEV
      'css-hot-loader',
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
    ].filter(Boolean),
  },
  server: {
    test: /\.css$/,
    loader: 'null-loader',
  },
};
