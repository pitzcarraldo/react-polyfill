'use strict';

var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');
baseConfig.output.filename = 'dist/react-polyfill.js';
module.exports = baseConfig;
