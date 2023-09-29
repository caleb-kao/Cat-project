const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: path.resolve(__dirname, 'src/index.js'),
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
        signup: path.resolve(__dirname, 'client/signup.js'),
    },
    output: {
        filename: "[name].bundle.js", // the file name would be my entry"s name with a ".bundle.js" suffix
        path: path.resolve(__dirname, "dist") // put all of the build in a dist folder
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     filemane: 'index.html',
        //     template: "src/index.html",
        //     chunks: ['index'],
        //     inject: true
        // }),
        new HtmlWebpackPlugin({
            filemane: 'signup.html',
            template: "client/signup.html",
            chunks: ['signup'],
            inject: true
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
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },

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