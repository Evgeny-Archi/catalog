import webpackNodeExternals from 'webpack-node-externals';
import path from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
    name: 'server',
    target: 'node',
    mode: 'production',
    entry: {
        server: path.resolve(__dirname, '../src/app.ts'),
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
    },
    node: {
        __dirname: false,
    },
    externals: [webpackNodeExternals()],
    resolve: {
        extensions: ['.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.server.json',
                },
            },
        ],
    },
};

export default config;
