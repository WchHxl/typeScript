/*
 * @Author: wch
 * @Date: 2021-12-23 15:58:35
 * @LastEditTime: 2021-12-23 15:58:35
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \typeScript\src\lib\global-lib.d.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
function globalLib(options) {
  console.log(options);
}
globalLib.version = '1.0.0';
globalLib.doSomething = function () {
  console.log('globalLib do something');
}