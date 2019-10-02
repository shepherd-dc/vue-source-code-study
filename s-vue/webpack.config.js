const path = require('path')
module.exports = {
  entry: path.resolve(__dirname, './src/entry.js'),
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
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      core: path.resolve(__dirname, 'src/core'),
      web: path.resolve(__dirname, 'src/web')
    }
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