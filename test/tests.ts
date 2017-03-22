/*
 * When testing with Webpack and ES6, we have to do some
 * preliminary setup. Because we are writing our tests also in ES6,
 * we must transpile those as well, which is handled inside
 * `karma.conf.js` via the `karma-webpack` plugin. This is the entry
 * file for the Webpack tests. Similarly to how Webpack creates a
 * `bundle.js` file for the compressed app source files, when we
 * run our tests, Webpack, likewise, compiles and bundles those tests here.
*/

import 'angular';
import 'angular-mocks';
import 'angular-material';
import '../src/App';

var testsContext = require.context("../src", true, /.spec.ts$/);
testsContext.keys().forEach(testsContext);