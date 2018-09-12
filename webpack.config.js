<<<<<<< HEAD
var path = require('path');
var webpack = require('webpack');
//const ExtractTextPlugin = require("extract-text-webpack-plugin")
module.exports = {
  entry: {
      //'server':'./server.js',
      'bundle':'./src/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist/views/build'),
    publicPath: '/build/',
    filename: '[name].js'
=======
var path = require('path')
var webpack = require('webpack')
//const ExtractTextPlugin = require("extract-text-webpack-plugin")
module.exports = {

  entry: './public/src/main.js',
  output: {
    //filename: './public/build/bundle.js'
    path: path.resolve(__dirname, './public/build'),
    publicPath: '/build/',
    filename: 'bundle.js'
>>>>>>> 05650b7624ce288a671cfdf34f284b285050d235
  },
  resolve: {

    alias: {
<<<<<<< HEAD
      vue: './vue.js'
=======
      vue: './vue.js',
      '_assets': path.resolve(__dirname, './assets/')
>>>>>>> 05650b7624ce288a671cfdf34f284b285050d235
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
<<<<<<< HEAD
        test: /\.(mov|mp4|png|jpg|gif|svg)$/,
=======
        test: /\.(png|jpg|gif|svg)$/,
>>>>>>> 05650b7624ce288a671cfdf34f284b285050d235
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
<<<<<<< HEAD
      { test: /\.scss$/,
=======
      {
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }  
          }
        ]
      },
      {
        test: /\.scss$/,
>>>>>>> 05650b7624ce288a671cfdf34f284b285050d235
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    port: 3000
  }
<<<<<<< HEAD
};

if (process.env.NODE_ENV === 'production') {
    module.exports.entry = {
      'bundle':'./dist/src/main.js'
    };
    //console.log(module);
=======
}

if (process.env.NODE_ENV === 'production') {
>>>>>>> 05650b7624ce288a671cfdf34f284b285050d235
  module.exports.devtool = '#source-map';
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]);
}