const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//
const package = require('./package.json')

module.exports = {
    entry: path.resolve('src/index.tsx'),
    output: {
        filename: 'main.js',
        path: path.resolve('dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            entities: path.resolve('src/entities'),
            features: path.resolve('src/features'),
            pages: path.resolve('src/pages'),
            shared: path.resolve('src/shared'),
            widgets: path.resolve('src/widgets')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: package.name,
            template: path.resolve('src/index.html')
        })
    ],
    devServer: {
        port: 8080,
        open: false
    }
}
