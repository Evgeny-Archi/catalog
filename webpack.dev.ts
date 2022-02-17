import merge from 'webpack-merge';
import { Configuration } from 'webpack';
import 'webpack-dev-server';
import common from './webpack.common';

const config: Configuration = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        static: './dist',
        hot: true,
        open: true,
    },
});

export default config;
