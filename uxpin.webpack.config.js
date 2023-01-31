const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: {
    modules: [__dirname, "node_modules"],
    extensions: ["*", ".js", ".jsx"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
          test: /\.jsx?$/,
          loaders: ['babel-loader'],
          include: [
              path.join(__dirname, 'public/src'),
              path.join(__dirname, 'node_modules/@salesforce/design-system-react'),
          ]
      },
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract(
              'style-loader',
              'css-loader?url=false&outputStyle=expanded&sourceMap=true&sourceMapContents=true'
          )
      },
      {
          test: /\.(svg|gif|jpe?g|png)$/,
          loader: 'url-loader?limit=10000'
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
          },
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        loader: require.resolve('babel-loader', { paths: ['./node_modules/@uxpin/merge-cli'] }),
        test: /\.js?$/,
        exclude: /node_modules/,
        options: {
          presets: [
            require.resolve('@babel/preset-env', { paths: ['./node_modules/@uxpin/merge-cli'] }),
            require.resolve('@babel/preset-react', { paths: ['./node_modules/@uxpin/merge-cli'] }),
          ],
        }
      },
    ]
  }
}
