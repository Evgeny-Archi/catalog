import * as path from 'path';
import { Configuration } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';

const config: Configuration = {
    name: 'client',
    mode: 'production',
    target: 'web',
    entry: {
        client: path.resolve(__dirname, '../frontend/src/index.tsx'),
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist/static'),
        publicPath: '/',
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        fallback: {
            http: false,
            url: false,
        },
    },
    plugins: [
        new WebpackManifestPlugin({}),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
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
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-typescript'],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false,
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                oneOf: [
                    {
                        issuer: /\.[jt]sx?$/,
                        resourceQuery: /component/,
                        use: ['@svgr/webpack'],
                    },
                    {
                        type: 'asset/resource',
                        generator: {
                            filename: 'media/[name].[contenthash][ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(?:ico|png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'media/[name].[contenthash][ext]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/inline',
            },
        ],
    },
};

export default config;
