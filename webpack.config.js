const currenTask = process.env.npm_lifecycle_event
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './app/index.js',
  output: {
    //publicPath: '/',
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundled.js'
  },
  plugins: [new HtmlWebpackPlugin({ template: './app/index.html' })],
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 4020,
    //contentBase: path.join(__dirname, 'app'),
    contentBase: path.resolve(__dirname, 'docs'),
    hot: true
    //historyApiFallback: { index: 'index.html' }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            //presets: ['@babel/preset-react', ['@babel/preset-env', { targets: { node: '12' } }]]
            presets: [['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3, targets: 'defaults' }], '@babel/preset-react']
          }
        }
      }
    ]
  }
}

if (currenTask == 'build') {
  config.mode = 'production'
}

module.exports = config
