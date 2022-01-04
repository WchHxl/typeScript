/*******
 * @Author: wch
 * @Date: 2021-12-23 15:59:31
 * @LastEditTime: 2021-12-27 17:56:24
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \typeScript\src\lib\umd-lib.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
      define(factory);
    } else if (typeof module === "object" && module.exports) {
      module.exports = factory();
    } else {
      root.umdLib = factory();
    }
}(this, function () {
  return {
    version: '1.0.0',
    doSomething() {
      console.log('umdLib do something');
    }
  }
}))