var webpack = require('webpack');
var path = require('path');
var entry = [
  'webpack-dev-server/client?http://localhost:8080/',
  'webpack/hot/dev-server',
  'babel-polyfill',
  './client/index.js'
]


module.exports = {
  entry: entry,
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devServer: {
    contentBase: './build'
  }
};
