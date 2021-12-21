/*
 * @Author: wch
 * @Date: 2021-12-21 17:12:27
 * @LastEditTime: 2021-12-21 18:03:59
 * @LastEditors: your name
 * @Description: 索引类型
 * @FilePath: \typeScript\src\advanced4.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
let obj_a4 = {
  a: 1,
  b: 2,
  c: 3
}
function getValue(obj: any, keys: string[]) {
  return keys.map(key => obj[key])
}
console.log(getValue(obj_a4, ['a', 'b']));
console.log(getValue(obj_a4, ['e', 'f']));

// keyof T 索引类型的查询操作符
interface Obj { 
  a: number,
  b: string
}
let a_a4: keyof Obj

// T[K] 对象T的属性K的类型
let b_a4: Obj['a']

// T extends U
function getValue_1<T, K extends keyof T>(obj: T, keys: K[]): T[K][]{
  return keys.map(key => obj[key])
}
// 约束属性只能是对象中存在的
// console.log(getValue_1(obj_a4, ['e', 'f']));
