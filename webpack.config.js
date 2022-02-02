const path = require('path');
const HtmlWebpackPlagin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
     mode: 'development',
     devtool: 'inline-source-map',
     entry: {
          index: './src/index.js',
     },
     output: {
          filename: '[name].[contenthash].js',
          path: path.resolve(__dirname, 'dist'),
          clean: true,
     },
     module: {
          rules: [
               {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
               },
               {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
               },
               {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
               },
          ],
     },
     plugins: [
          new HtmlWebpackPlagin({
               title: 'Title',
          }),
          new MiniCssExtractPlugin()
     ],
     optimization: {
          moduleIds: 'deterministic',
          runtimeChunk: 'single',
          splitChunks: {
               cacheGroups: {
                    vendor: {
                         test: /[\\/]node_modules[\\/]/,
                         name: 'vendors',
                         chunks: 'all',
                    },
               },
          },
     },
};
