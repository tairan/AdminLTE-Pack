const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const config = {
  entry: {
    jquery: 'jquery',
    bootstrap: ['bootstrap'],
    index: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js",
    chunkFilename: "[chunkhash].js"
  },
  module: {
    rules: [{ test: /\.txt$/, use: "raw-loader" }]
  },
  resolve: {
    alias: {
        'jquery': 'node_modules/jquery/dist/jquery.js',
        'bootstrap': 'node_modules/bootstrap/dist/js/bootstrap.js'
    },
    modules: [
        path.resolve('./'),
        path.resolve('./node_modules')
    ]
  },
  plugins: [
    new UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: "./example/index.html",
      title: "Bootstrap Template 101"
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })      
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /node_modules/,
          chunks: "initial",
          name: "[name]",
          priority: 10,
          enforce: true
        }
      }
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
};

module.exports = config;
