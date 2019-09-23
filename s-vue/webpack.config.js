const path = require('path')
var webpack = require('webpack')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'svue.js',
    library: 'Svue',
    libraryTarget: 'umd'
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env'
                ]
              ]
            }
          }
        ]
      }
    ]
  }
}