'use strict'

import webpack from 'webpack'
import BrowserSyncPlugin from 'browser-sync-webpack-plugin'


module.exports = {
  entry: {
  	'index': './src/index.js'
  },
  output: {
    path: __dirname + '/public/javascripts',
  	filename: '[name].js'
  },
  module: {
  	loaders: [
  	  {
  	    test: /\.tag$/,
        loader: 'riotjs-loader',
  	    exclude: /node_modules/
  	  },
  	  {
  	    test: /\.jsx?$|\/.tag$/,
        loader: 'babel-loader',
  	    exclude: /node_modules/
  	  },
  	]
  },
  resolve: {
  	extensions: ['*', '.js', '.tag']
  },

  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    }),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['./public'] },
      files: ['./*.html', '**/*.css', '**/*.js']
    })
  ]
}