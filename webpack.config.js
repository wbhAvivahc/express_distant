const path = require('path');
const webpack = require('webpack');
// const webpackDevServer = require('webpack-dev-server')

module.exports = {
  entry: './index.js',
  output:{
    filename: 'bundle.js',
    path: path.resolve(__dirname,'./dist')
  },
  module:{
    rules: [
      {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  },
  devServer:{
    host : '192.168.168.52',
    port: 8080,
    open: true,
    inline: true,
    hot: true,
    inline: true,
    // openPage: 'food.html',
    // devServer: {
    //   contentBase: './dist'
    // },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  // devtool: true,
  profile: true
}