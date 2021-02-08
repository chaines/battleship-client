const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, 'dist/'),
    publicPath: '/',
    filename: 'min.js'
  }, 
  devServer: {
    contentBase: path.join(__dirname, 'static/'),
    publicPath: '/',
    port: '3000',
    proxy: {
      '/api': 'http://localhost:30001'
    }
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: [
        path.join(__dirname, 'node_modules/')
      ],
      use: ['babel-loader']
    }]
  }
}