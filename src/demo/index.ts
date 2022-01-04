/*
 * @Author: wch
 * @Date: 2021-11-08 16:23:57
 * @LastEditTime: 2021-12-24 14:55:22
 * @LastEditors: your name
 * @Description:  ts demo
 * @FilePath: \typeScript\src\demo\index.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import './dataType';
import './enum';
import './interface';
import './class1';
import './class2';
import './generics';
import './advanced';
import './merge';
let hello: string = 'Hello typeScript'
document.querySelectorAll('.app')[0].innerHTML = hello

import $ from "jquery";
$('.app').css('color', 'red')

globalLib({
  x: 1
})
console.log(globalLib.doSomething());
console.log(globalLib.version);