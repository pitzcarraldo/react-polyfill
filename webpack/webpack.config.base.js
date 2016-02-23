'use strict';
var webpack = require('webpack');

module.exports = {
  entry: [
    './node_modules/es5-shim/es5-shim.js',
    './node_modules/es5-shim/es5-sham.js',
    './modernizr.js',
    './node_modules/respond.js/dest/respond.src.js',
    './node_modules/compose-dataset-shim/index.js',
    './node_modules/console-polyfill/index.js',
    './node_modules/eventsource-polyfill/dist/eventsource.js'
  ],
  output: {
    library: 'react-polyfill',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [{ test: /\.js$/, loaders: ['script'] }],
    postLoaders: [{ test: /\.js$/, loaders: ['es3ify'] }]
  }
};
