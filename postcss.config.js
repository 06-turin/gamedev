module.exports = {
  plugins: [
    'postcss-nested',
    'postcss-assets-rebase',
    [
      'postcss-preset-env',
      {
        browsers: 'last 2 versions',
        stage: 0,
      },
    ],
  ],
};
