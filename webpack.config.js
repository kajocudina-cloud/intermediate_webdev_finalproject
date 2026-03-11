const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/script.js",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        libraryTarget: 'window' 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: "./src/favicon.ico",
                       inject: 'body' 
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"], // Ova dva reda ubacuju CSS u main.js
            },
            {
                test: /\.(ico|png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};