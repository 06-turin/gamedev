const fileRegex = /^(?!.*\.inline).*\.(svg|jpe?g|png|gif|eot|woff2?|ttf|otf)$/;

export const fileLoader = {
  client: {
    test: fileRegex,
    type: 'asset/resource',
  },
  server:
    {
      test: fileRegex,
      loader: 'null-loader',
    },
};
