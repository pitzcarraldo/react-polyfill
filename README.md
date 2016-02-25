# react-polyfill

[![Build Status](https://travis-ci.org/Pitzcarraldo/react-polyfill.svg)](https://travis-ci.org/Pitzcarraldo/react-polyfill)
[![npm version](https://img.shields.io/npm/v/react-polyfill.svg?style=flat-square)](https://www.npmjs.com/package/react-polyfill)
[![npm downloads](https://img.shields.io/npm/dm/react-polyfill.svg?style=flat-square)](https://www.npmjs.com/package/react-polyfill)

A bundle of shims and polyfills to support React and CSS3 for legacy browsers.
This contains below modules.

* [compose-dataset-shim](https://github.com/compose-ui/dataset-shim): Shims the dataset property for DOM nodes.
* [console-polyfill](https://github.com/paulmillr/console-polyfill): Makes it safe to do console.log()-s etc always.
* [es5-shim](https://github.com/es-shims/es5-shim): ECMAScript 5 compatibility shims for legacy (and modern) JavaScript engines.
* [eventsource-polyfill](https://github.com/amvtek/EventSource): Provide polyfill to support EventSource in browser where it is not available
* [modernizr](https://github.com/Modernizr/Modernizr): JavaScript library that detects HTML5 and CSS3 features in the user’s browser. Built with config-all.json
* [respond.js](https://github.com/scottjehl/Respond): A fast & lightweight polyfill for min/max-width CSS3 Media Queries (for IE 6-8, and more)

## Usage

### Browser

:warning: React-Polyfill must be placed before any stylesheets.

```html
<head>
...
<!--[if lte IE 8]>
<script src="//pitzcarraldo.github.io/react-polyfill/react-polyfill.min.js" charSet="UTF-8"></script>
<![endif]-->
<link href="styles.css" rel="stylesheet" charSet="UTF-8"/>
...
</head>
```

### Webpack

React-Polyfill is just concatted JavaScript. Thus, you couldn't require or import to your module with `babel-loader`. Use [`script-loader`](https://github.com/webpack/script-loader) instead.

```js
require('script!react-polyfill');

or

import 'script!react-polyfill';
```

## LICENSE

[MIT](LICENSE)
