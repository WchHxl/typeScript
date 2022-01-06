/*
 * @Author: wch
 * @Date: 2021-12-23 15:59:11
 * @LastEditTime: 2021-12-27 16:08:25
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \typeScript\src\lib\module-lib.d.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
declare function moduleLib(options: options): void
interface options {
  [key: string]: any
}
declare namespace moduleLib {
  const version: string
  function doSomething(): void
}
export = moduleLib