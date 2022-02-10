const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
     entry: {
          app: './src/index.js',
     },
     plugins: [
          new HtmlWebpackPlugin({
               title: 'Catalog',
          }),
     ],
     output: {
          filename: '[name].bunle.js',
          path: path.resolve(__dirname, 'dist'),
          clean: true,
     },
};