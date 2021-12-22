/*
 * @Author: wch
 * @Date: 2021-11-23 14:27:13
 * @LastEditTime: 2021-11-23 17:16:56
 * @LastEditors: your name
 * @Description: 泛型
 * @FilePath: \typeScript\src\generics.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
// 泛型函数
function log<T>(value: T): T {
  return value
}
log<string[]>(['1', '2'])
log(['1', '2'])

type Log = <T>(value: T) => T
function a<T>(value: T): T {
  return value
}
let myLog: Log = a
console.log(myLog(['1']))

interface Log2 {
  <T>(value: T): T
}
let log2: Log2 = a
console.log(log2(2))

class Log3<T> {
  run(v: T) {
    console.log(v);
    return v
  }
}
let cl = new Log3<number>()
cl.run(1)
let cl1 = new Log3()
cl1.run([1, 2, 3])

interface Length {
  length: number
}
// T 继承了 Length 
function fun1<T extends Length>(value: T): T {
  console.log(value, value.length);
  return value
}
fun1('1')
fun1([1])
fun1({a: 1, length: 1})