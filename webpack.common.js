const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/index.js')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext]'
                }
            }
        ]
    }
};
