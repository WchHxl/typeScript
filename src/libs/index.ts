/*
 * @Author: wch
 * @Date: 2021-12-27 15:15:03
 * @LastEditTime: 2022-01-04 14:53:52
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \typeScript\src\lib\index.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
let hello: string = 'Hello typeScript'
document.querySelectorAll('.app')[0].innerHTML = hello

import $ from "jquery";
$('.app').css('color', 'red')

globalLib({ x: 1 });
globalLib.doSomething();
import moduleLib from "./module-lib";

moduleLib({
  x: 1
})
moduleLib.doSomething()
import umdLib from "./umd-lib";
umdLib.doSomething()