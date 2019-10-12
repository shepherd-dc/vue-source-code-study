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
      web: path.resolve(__dirname, 'src/web'),
      shared: path.resolve(__dirname, 'src/shared')
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
      },
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(__dirname, 'src')], // 指定检查的目录
        options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
          formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
        }
      }
    ]
  }
}
