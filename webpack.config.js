const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const distPath = path.relative(process.cwd(), path.resolve(__dirname, 'dist'));

module.exports = {
    entry: './app.jsx',
    output: {
        filename: `${distPath}/app.js`,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    context: __dirname,
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['env', 'react'],
                    plugins: ['transform-object-rest-spread'],
                },
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'index.html',
                to: `${distPath}/index.html`,
            },
            {
                from: 'css/w3.css',
                to: `${distPath}/css/w3.css`,
            },
            {
                from: 'css/borderlands.css',
                to: `${distPath}/css/borderlands.css`,
            },
            {
                from: 'img/forest.jpg',
                to: `${distPath}/img/forest.jpg`,
            },
            {
                from: 'robots.txt',
                to: `${distPath}/robots.txt`,
            },
        ]),
    ],
}
