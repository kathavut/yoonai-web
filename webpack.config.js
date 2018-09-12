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
  },
  resolve: {

    alias: {
      vue: './vue.js'
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
        test: /\.(mov|mp4|png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      { test: /\.scss$/,
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
};

if (process.env.NODE_ENV === 'production') {
    module.exports.entry = {
      'bundle':'./dist/src/main.js'
    };
	module.exports.output = {
		path: path.resolve(__dirname, './views/build'),
		publicPath: '/build/',
		filename: '[name].js'
	}
    //console.log(module);
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