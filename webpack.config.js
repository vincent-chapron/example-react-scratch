const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name]-[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
      },
    ],
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = config;
