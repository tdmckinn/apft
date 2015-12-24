const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './scripts/index.jsx',
  output: {
    filename: './wwwroot/assets/scripts/bundle.js'
  },
  // Turn on sourcemaps
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.jsx', '.js'],      
    modulesDirectories: [
        'node_modules',
        path.resolve(__dirname, './node_modules')
      ]
  },
  // Add minification
  plugins: [
   // new webpack.optimize.UglifyJsPlugin({mangle:false, compress:false})
  ],
  module: {
   loaders: [
    { 
      test: /(\.js|\.jsx)$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets:['es2015','react']
      }
    }
    ]
  }
}