const common = require('./webpack.common');
const merge = require('webpack-merge');
const paths = require('./paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const PurgeCssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob');
const { generateHtmlPluginTemplates } = require('./helpers');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contentHash].bundle.js',
    path: paths.dist
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
    ]
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      ...generateHtmlPluginTemplates({
        collapseWhitespace: true,
        removeComments: true,
        keepClosingSlash: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        minifyJS: true,
        minifyCSS: true
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contentHash].css'
    }),
    new PurgeCssPlugin({
      paths: glob.sync(`${paths.src}/**/*`,  { nodir: true })
    })
  ]
});
