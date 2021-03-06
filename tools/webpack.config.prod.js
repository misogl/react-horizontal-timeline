/**
 * WEBPACK CONFIG FOR PRODUCTION USE
 */

const path = require('path');
const sourcePath = path.join(__dirname, '..', 'src');
const distPath = path.join(__dirname, '..', 'dist');
const webpack = require('webpack');

const rules = [
  // Babel enables the use of ES6 today by transpiling your ES6 JavaScript into equivalent ES5
  // source that is actually delivered to the end user browser.
  {
    test: /\.jsx?$/,
    use: [ 'babel-loader' ],
    include: sourcePath
  },
];

module.exports = {
  entry: [
    path.join(sourcePath, 'Components/HorizontalTimeline.jsx')
  ],
  // If you pass an array - the modules are loaded on startup. The last one is exported.
  output: {
    path: distPath,
    filename: 'react-horizontal-timeline.js',
    libraryTarget: 'commonjs2'
  },
  // Array of file extensions used to resolve modules.
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  // External dependencies don't need to be in our own dist
  externals: {
    'color': 'color',
    'radium': 'radium',
    'react': 'react',
    'react-icons': 'react-icons',
    'react-icon-base': 'react-icon-base',
    'react-motion': 'react-motion',
    'react-dimensions': 'react-dimensions',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    rules: rules
  }
};
