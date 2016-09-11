/**
 * webpack.config.babel.js: Webpack configuration
 *
 * Copyright 2016 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

import { join } from 'path'
import { DefinePlugin, optimize } from 'webpack'

export default {
  'context': join(__dirname, 'src'),
  'devtools': false,

  'entry': {
    // Paths here are relative to `context` of this configuration

    'index': './index.js'
  },

  'output': {
    // Paths here are relative to current directory
    'path': join(__dirname, 'dist'),

    'filename': '[name].js',

    'libraryTarget': 'commonjs2'
  },

  'module': {
    'loaders': [
      {
        'test': /\.js$/,
        'exclude': /node_modules/,
        'loader': 'babel'
      }
    ]
  },

  'plugins': [
    new DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } }),
    new optimize.OccurenceOrderPlugin(),
    new optimize.DedupePlugin(),
    new optimize.UglifyJsPlugin({
      'compress': { 'warnings': false },
      'output': { 'comments': false },
      'sourceMap': false
    })
  ]
}
