var webpack = require('webpack');

module.exports = {
  entry: './wwwroot/index.tsx',
  output: {
    filename: './wwwroot/bundle.js'
  },
  // Turn on sourcemaps
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  // Add minification
  plugins: [
   // new webpack.optimize.UglifyJsPlugin({mangle:false, compress:false})
  ],
  module: {
   loaders: [
    // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
    { test: /\.ts(x?)$/, loader: 'babel-loader!ts-loader' }
    ]
  }
}