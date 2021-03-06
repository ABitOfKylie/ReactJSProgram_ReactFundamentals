var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  resolve: {
    extensions: ['', '.jsx', '.js'], // Recognize .jsx files
  },
  entry: [
    './app/index.jsx',
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      {test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'},
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
  ],
}
