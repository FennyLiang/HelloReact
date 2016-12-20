var path = require('path');
var webpack = require('webpack');


module.exports = {
  entry: './index.jsx',
  output: {
    filename: './bundle.js',

  },

  devServer: {
    inline: true,
    port: 8888
  },

  resolve: {
    extensions: ['', '.js', '.jsx','css']
  },

  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',

      query:{
        presets: ["react", "es2015", "stage-0"]
      }

    }]

  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM:'react-dom'
    })
  ],
}