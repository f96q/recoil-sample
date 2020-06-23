const webpack = require('webpack')
const path = require('path')
const publicPath = path.resolve('./public')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: publicPath
  },
  resolve: {
    mainFields: ['browser', 'main', 'module'],
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
   contentBase: publicPath
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_ENDPOINT': process.env.API_ENDPOINT ? JSON.stringify(process.env.API_ENDPOINT) : null
    })
  ]
}
