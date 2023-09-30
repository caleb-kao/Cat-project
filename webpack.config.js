const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: path.resolve(__dirname, 'src/index.js'),
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
        signup: path.resolve(__dirname, 'src/signup.js'),
        login: path.resolve(__dirname, 'src/log.js'),
    },
    output: {
        filename: "[name].bundle.js", // the file name would be my entry"s name with a ".bundle.js" suffix
        path: path.resolve(__dirname, "dist"), // put all of the build in a dist folder
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: "src/index.html",
            chunks: ['index'],
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename: 'signup.html',
            template: "src/signup.html",
            chunks: ['signup'],
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'login.html',
            template: "src/login.html",
            chunks: ['login'],
            inject: true
        }),
    ],
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                }]
            },
            {
                test: /\.(sa|sc|c)ss$/, // styles files
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: {
                    loader: 'url-loader',
                },
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },

    devServer: {
        // historyApiFallback: true,
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                router: () => 'http://localhost:3000',
                logLevel: 'debug' /*optional*/
            }
        }
    },
    devtool: 'eval-source-map',

}