const path = require('path')
module.exports = {
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'svue.js',
    library: 'SVue',
    libraryTarget: 'umd'
  },
  mode: 'development',
  devtool: 'source-map',
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
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