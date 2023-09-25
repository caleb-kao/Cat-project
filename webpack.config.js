const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'client/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Tic Tac Toe',
            template: 'index.html'
        })],
    devServer: {
        static: {
            publicPath: '/build',
            directory: path.resolve(__dirname, 'build'),
        },
        proxy: {
            '/api': 'http://localhost:3000'
        }
    },

}