import merge from 'webpack-merge';
import { Configuration } from 'webpack';
import 'webpack-dev-server';
import path from 'path';
import common from './webpack.common';

const config: Configuration = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, '../', 'build'),
        },
        hot: true,
        open: true,
        compress: true,
        proxy: {
            '/api': 'http://localhost:3000',
        },
    },
});

export default config;
