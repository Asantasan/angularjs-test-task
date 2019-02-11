 
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    bundle:["./main.js","./src/angular/reactDirective.js"]
},
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "bundle.js"
  }
 
};