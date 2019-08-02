const common = require('./webpack.common');
const merge = require('webpack-merge');
const paths = require('./paths');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'main.js',
    path: paths.dist
  }
});
