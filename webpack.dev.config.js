const path = require('path');
const { createConfig } = require('@edx/frontend-platform');

module.exports = createConfig('webpack-dev', {
  entry: path.resolve(__dirname, 'example'),
  output: {
    path: path.resolve(__dirname, 'example/dist'),
    publicPath: '/',
  },
  resolve: {
    alias: {
      '@edx/frontend-lib-special-exams': path.resolve(__dirname, 'src'),
    },
  },
});
