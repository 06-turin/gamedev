import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  client: {
    test: /\.css$/,
    use: [
      MiniCssExtractPlugin.loader,
      // 'style-loader',
      'css-loader',
      'postcss-loader'],
  },
  server: {
    test: /\.css$/,
    loader: 'null-loader',
  },
};
