const common = require('./webpack.common');
const merge = require('webpack-merge');
const paths = require('./paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contentHash].bundle.js',
    path: paths.dist
  },
  plugins: [new CleanWebpackPlugin()]
});
