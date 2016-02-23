module.exports = function (config) {
  config.set({
    basePath: '.',
    frameworks: ['mocha'],
    browsers: ['PhantomJS'],
    files: [
      'node_modules/es5-shim/es5-shim.js',
      'test/**/*.spec.*',
      {pattern: 'src/**/*', watched: true, included: false}
    ],
    preprocessors: {
      'test/**/*.spec.*': ['webpack', 'sourcemap']
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true
    },
    singleRun: true
  });
};
