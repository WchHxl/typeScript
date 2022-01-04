/*
 * @Author: wch
 * @Date: 2021-12-23 15:58:35
 * @LastEditTime: 2022-01-04 14:53:00
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \typeScript\src\lib\global-lib.d.ts
 * 可以输入预定的版权声明、个性签名、空行等
*/
declare function globalLib(options: globalLib.Options): void;
declare namespace globalLib {
  const version: string;
  function doSomething(): void;
  interface Options {
    [key: string]: any,
  }
}