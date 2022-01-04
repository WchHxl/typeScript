/*******
 * @Author: wch
 * @Date: 2021-12-23 15:59:06
 * @LastEditTime: 2021-12-27 16:08:43
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \typeScript\src\lib\module-lib.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
const version = '1.0.0'

function doSomething() {
  console.log('moduleLib do something');
}

function moduleLib(options) {
  console.log(options);
}
moduleLib.version = version;
moduleLib.doSomething = doSomething;
module.exports = moduleLib;