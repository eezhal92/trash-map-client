const dotenv = require('dotenv');
const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

dotenv.config();

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'redux',
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: resolve(__dirname, 'src'),
      },
    ],
  },
  resolve: {
    alias: {
      app: resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'LoL',
    }),
    new CopyWebpackPlugin([
      './manifest.json',
      { from: './src/assets/images/icon_192.png', to: './icon_192.png' },
      { from: './src/assets/images/icon_144.png', to: './icon_144.png' },
    ]),
  ],
};
