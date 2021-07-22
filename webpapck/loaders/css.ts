export default {
  client: {
    test: /\.css$/,
    use: ['style-loader', 'css-loader', 'postcss-loader'],
  },
  server: {
    test: /\.css$/,
    loader: 'null-loader',
  },
};
