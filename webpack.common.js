const dotenv = require('dotenv');
const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        ENDPOINT_BASE_URL: JSON.stringify(process.env.ENDPOINT_BASE_URL),
      },
    }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'LoL',
    }),
  ],
};
