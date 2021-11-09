/*******
 * @Author: wch
 * @Date: 2021-11-08 18:00:54
 * @LastEditTime: 2021-11-08 18:13:13
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \typeScript\build\webpack.config.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const proConfig = require('./webpack.pro.config')

module.exports = (env, argv) => {
    let config = argv.mode === 'development' ? devConfig : proConfig;
    return merge(baseConfig, config);
};
