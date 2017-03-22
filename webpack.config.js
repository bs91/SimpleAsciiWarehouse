(function() {
'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const webpack = require('webpack');
const path = require('path');
const PATHS = {
    app: path.join(__dirname, '/src/App.ts'),
    vendor: path.join(__dirname, '/src/vendor.ts'),
};

const config = {
    entry: {
        main: ['babel-polyfill', PATHS.app],
        vendor: ['babel-polyfill', PATHS.vendor]
    },
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: '[chunkhash].[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                exclude: /(node_modules)/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(css)$/,
                use:['style-loader', 'css-loader']
            },
            {
                test: /\.(ts)$/,
                exclude: /(node_modules)/,
                use: 'ts-loader'
            },
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/, 
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: [ ".ts", ".js", ".json" ]
    },
    plugins: [
        new WebpackCleanupPlugin({ exclude: ['indexTemplate.html', 'templates/**/*']}),
        new HtmlWebpackPlugin({ hash: true, filename: 'index.html', template: './static/indexTemplate.html'}),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        })
    ]
};

module.exports = config;
})();