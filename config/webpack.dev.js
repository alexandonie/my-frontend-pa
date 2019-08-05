const common = require('./webpack.common');
const merge = require('webpack-merge');
const paths = require('./paths');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: paths.dist
  }
});
