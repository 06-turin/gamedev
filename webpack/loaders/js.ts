export const jsLoader = {
  client: {
    test: /\.ts(x?)$/,
    exclude: /node_modules/,
    use: {
      loader: 'ts-loader',
      options: {
        compiler: 'ttypescript',
      },
    },
  },
  server: {
    test: /\.ts(x?)$/,
    exclude: /node_modules/,
    use: {
      loader: 'ts-loader',
      options: {
        compiler: 'ttypescript',
      },
    },
  },
};
