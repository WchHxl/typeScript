/*
 * @Author: wch
 * @Date: 2022-01-06 11:38:09
 * @LastEditTime: 2022-01-06 11:39:24
 * @LastEditors: your name
 * @Description: 简单计算函数
 * @FilePath: \typeScript\src\math.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
function add(a: number, b: number) {
  return a + b
}
function sub(a: number, b: number) {
  return a - b
}
module.exports = {
  add,
  sub
}