var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var path = require('path');
var serverConfig = {
    mode: 'development',
    entry: './server/index.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: __dirname,
        filename: 'server.js',
        publicPath: '/'
    },
    module: {
        rules: [
        { test: /\.(js)$/, use: 'babel-loader' }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
        __isBrowser__: "false"
        })
    ]
};
var clientConfig = {
    mode: 'development',
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
        { test: /\.(js)$/, use: 'babel-loader' },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
        __isBrowser__: "true"
        })
    ]
};

module.exports = [serverConfig, clientConfig];