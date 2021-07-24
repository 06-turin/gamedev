const fileRegex = /^(?!.*\.inline).*\.(svg|jpe?g|png|gif|eot|woff2?|ttf)$/;

export const fileLoader = {
  client: {
    test: fileRegex,
    use: ['file-loader?name=[hash].[ext]'],
  },
  server: {
    loader: 'null-loader',
    test: fileRegex,
  },
};
