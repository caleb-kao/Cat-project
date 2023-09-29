const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: {
    //     main: path.resolve(__dirname, 'client/components/index.js')
    //     // signup: path.resolve(__dirname, 'client/signup.js'),
    // },
    output: {
        path: path.join(__dirname, "/dist"), // the bundle output path
        filename: "bundle.js", // the name of the bundle
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html", // to import index.html file inside index.js
        }),
    ],
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/, // styles files
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
                loader: "url-loader",
                options: { limit: false },
            },
        ]
    },

    // plugins: [
    //     new HtmlWebpackPlugin({ filename: 'index.html', template: path.resolve(__dirname, 'client/components/index.html'), chunks: ['index'], inject: 'body' })
    //     // new HtmlWebpackPlugin({ filename: 'signup.html', template: path.resolve(__dirname, 'client/signup.html'), chunks: ['signup'] })
    // ],
    devServer: {
        port: 8080, // you can change the port
    },
    // devServer: {
    //     static: {
    //         directory: path.join(__dirname, '/dist'),
    //     },
    // },
    devtool: 'eval-source-map',
}