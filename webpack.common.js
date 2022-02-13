const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
     entry: {
          app: './src/index.tsx',
     },
     plugins: [
          new HtmlWebpackPlugin({
               title: 'Catalog',
               template: path.join(__dirname, 'src', 'index.html'),
          }),
          new MiniCssExtractPlugin({
               filename: '[name].css',
          })
     ],
     output: {
          filename: '[name].[contenthash].js',
          path: path.resolve(__dirname, 'build'),
          clean: true,
     },
     module: {
          rules: [
               {
                    test: /\.(ts|js)x?$/,
                    exclude: /node_modules/,
                    use: {
                         loader: 'babel-loader',
                         options: {
                              presets: ['@babel/preset-react', '@babel/preset-typescript']
                         }
                    }
               },
               {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader']
               },
               {
                    test: /\.(?:ico|png|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
               },
               {
                    test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
                    type: 'asset/inline',
               },
          ]
     },
     resolve: {
          extensions: ['.tsx', '.ts', '.js'],
     },
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