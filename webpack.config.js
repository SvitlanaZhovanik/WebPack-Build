const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devtool: 'eval-cheap-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      { test: /\.hbs$/, loader: "handlebars-loader" }
    ],
  },
  stats: 'errors-only',
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/you-project.html' }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    port: 1234,
    open: true,
    hot: true,
  },
};
