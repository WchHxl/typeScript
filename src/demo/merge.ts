/*
 * @Author: wch
 * @Date: 2021-12-23 14:40:25
 * @LastEditTime: 2021-12-23 15:09:58
 * @LastEditors: your name
 * @Description: 声明联合
 * @FilePath: \typeScript\src\demo\merge.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
interface A {
  a: string,
  b: number, // 同类型可以
  foo(bar: number): number // 5
  foo(bar: 'a'): number // 2
}
interface A {
  b: number,
  foo(bar: string): string, // 3
  foo(bar: string[]): string[] // 4
  foo(bar: 'b'): string // 1
}
let m_a: A = {
  a: '1',
  b: 1,
  foo(bar: any) {
    return bar
  }
}

function Lib() { }
namespace Lib {
  export let a = 1
}
console.log(Lib.a)

class C { }
namespace C {
  export let a = 1
}
console.log(C.a)
enum Color {
  red,
  blue,
  yellow
}
namespace Color {
  export function fun(a:string) { }
}
console.log(Color)