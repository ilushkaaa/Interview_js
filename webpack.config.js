const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'browserslist',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
    publicPath: '',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', 'scss', 'css'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
}