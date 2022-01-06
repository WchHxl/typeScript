/*******
 * @Author: wch
 * @Date: 2021-11-08 18:00:54
 * @LastEditTime: 2022-01-06 11:36:47
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \typeScript\build\webpack.base.config.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const forkTsWebpackPlugin = require('fork-ts-checker-webpack-plugin')
// const { 
//     CheckerPlugin
// } = require("awesome-typescript-loader")
module.exports = {
    entry: {
        'app': './src/libs/index.ts'
    },
    output: {
        filename: '[name].[chunkhash:8].js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{
                loader: 'ts-loader',
                // loader: 'awesome-typescript-loader',
                options: {
                    transpileOnly: true
                }
            }],
            exclude: /node_modules/
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        }),
        new forkTsWebpackPlugin()
        // new CheckerPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}