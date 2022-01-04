/*
 * @Author: wch
 * @Date: 2021-12-23 15:59:35
 * @LastEditTime: 2021-12-27 17:57:31
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \typeScript\src\lib\umd-lib.d.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
declare namespace umdLib { 
  const version: string
  function doSomething(): void
}
export as namespace umdLib
export = umdLib