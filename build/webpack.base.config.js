/*******
 * @Author: wch
 * @Date: 2021-11-08 18:00:54
 * @LastEditTime: 2021-12-13 21:46:56
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \typeScript\build\webpack.base.config.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'app': './src/demo/index.ts'
    },
    output: {
        filename: '[name].[chunkhash:8].js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader'
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
