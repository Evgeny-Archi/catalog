import merge from 'webpack-merge';
import { Configuration } from 'webpack';
import 'webpack-dev-server';
import path from 'path';
import common from './webpack.common';
import { proxy } from '../../package.json';

const config: Configuration = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, '../', 'build'),
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        hot: true,
        open: true,
        compress: true,
        proxy: {
            '/api': {
                target: proxy,
                secure: false,
                changeOrigin: true,
            },
        },
    },
});

export default config;
