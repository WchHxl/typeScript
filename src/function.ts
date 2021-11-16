/*
 * @Author: wch
 * @Date: 2021-11-10 22:43:20
 * @LastEditTime: 2021-11-10 23:19:34
 * @LastEditors: your name
 * @Description: function
 * @FilePath: \typeScript\src\function.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
function add1(x: number, y: number) {
  return x + y
}
let add2: (x: number, y: number) => number
type add3 = (x: number, y: number) => number
interface add4 {
  (x: number, y: number): number
}
// 可选参数必须在必选参数之后
function add5(x: number, y?: number) {
  return y ? x + y : x
}
function add6(x: number, y = 0, z: number, q = 1) {
  console.log(x);
  console.log(y);
  console.log(z);
  console.log(q);
  return x + y + z + q
}
console.log(add6(1, undefined, 3));
function add7(x: number, ...params: number[]) {
  return params.reduce((a, b) => b + a, x)
}
console.log(add7(1, 2, 3, 4, 5, 6, 7));