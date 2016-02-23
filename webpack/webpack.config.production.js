'use strict';

var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');
baseConfig.output.filename = 'dist/react-polyfill.min.js';
baseConfig.plugins = [
  new webpack.optimize.UglifyJsPlugin()
];
module.exports = baseConfig;
