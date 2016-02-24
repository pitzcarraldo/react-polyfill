var fs = require('fs');
var UglifyJS = require("uglify-js");
var result = UglifyJS.minify([
    './node_modules/es5-shim/es5-shim.js',
    './modernizr.js',
    './node_modules/es5-shim/es5-sham.js',
    './node_modules/respond.js/dest/respond.src.js',
    './node_modules/compose-dataset-shim/index.js',
    './node_modules/console-polyfill/index.js',
    './node_modules/eventsource-polyfill/dist/eventsource.js'
  ],
  {
    outSourceMap: "react-polyfill.min.js.map"
  }
);

fs.writeFile('./dist/react-polyfill.min.js', result.code, err => {
  if(err) console.error(err);
  console.log('done');
});

fs.writeFile('./dist/react-polyfill.min.js.map', result.map, err => {
  if(err) console.error(err);
  console.log('done');
});
