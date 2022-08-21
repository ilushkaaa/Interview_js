const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.config.js');

module.exports = merge(base, {
  plugins: [
    new HtmlWebpackPlugin({
      template: './react/exercise3/index.html',
    }),
  ]
});