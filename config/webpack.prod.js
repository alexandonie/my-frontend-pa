const common = require('./webpack.common');
const merge = require('webpack-merge');
const paths = require('./paths');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'main.[contentHash].js',
    path: paths.dist
  }
});
