const path = require('path');
const HtmlWebpackPlagin = require('html-webpack-plugin');

module.exports = {
     mode: 'development',
     devtool: 'inline-source-map',
     entry: {
          index: './src/index.js',
          print: './src/print.js',
     },
     output: {
          filename: '[name].bundle.js',
          path: path.resolve(__dirname, 'dist'),
          clean: true,
     },
     module: {
          rules: [
               {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
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
          })
     ]
};
