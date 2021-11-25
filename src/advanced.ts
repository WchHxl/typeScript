/*
 * @Author: wch
 * @Date: 2021-11-23 17:18:34
 * @LastEditTime: 2021-11-25 14:46:33
 * @LastEditors: your name
 * @Description: advanced 类型推断
 * @FilePath: \typeScript\src\advanced.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
let number = 1
let numArr = [1, null] // tsconfig "strictNullChecks": false, false 则不校验null  true 则推断为number[] | null
let funAdd = (x = 1) => x + 1
// (parameter) event: KeyboardEvent
window.onkeydown = (event) => {
  // console.log(event.button) // 推断是KeyboardEvent键盘事件，button不是键盘事件的方法
}

interface Foo {
  num: number
}
// 类型断言  不可滥用
// let foo = {} as Foo
// foo.num = 1
let foo: Foo = {
  num: 1
}


/*
 * X 兼容 Y : X(目标类型) = Y(源类型)
 */

let s: string = 'a'
s = null

// 接口兼容性
interface X {
  a: any;
  b: any;
}
interface Y {
  a: any;
  b: any;
  c: any;
  d?: any;
  e?: any;
}
let x1 = { a: 1, b: 1 }
let y = { a: 1, b: 1, c: 1, e: 1 }
x1 = y
// y= x1 // 类型“{ a: number; b: number; }”缺少类型“{ a: number; b: number; c: number; e: number; }”中的以下属性: c, e

// 函数兼容性
type Handler = (a: number, b: number) => void
function hof(handle: Handler) {
  return handle
}
// 1.参数个数
let handler1 = (a: number) => { }
hof(handler1)
let handler2 = (a: number, b: number, c: number) => { }
// hof(handler2) // 类型“(a: number, b: number, c: number) => void”的参数不能赋给类型“Handler”的参数。

// 可选参数和剩余参数 "strictFunctionTypes": false,
let funA = (p1: number, p2: number) => { }
let funB = (p1?: number, p2?: number) => { }
let funC = (...args: number[]) => { }
funA = funB
funA = funC
// "strictFunctionTypes": false,关闭配置才可以相等
funB = funA
funB = funC
// 剩余参数都可兼容
funC = funA
funC = funB
// 2.参数类型
let handler3 = (a: string) => { }
// hof(handler3) // 参数类型不同 不兼容

interface Point3D {
  x: number;
  y: number;
  z: number;
}
interface Point2D {
  x: number;
  y: number;
}

let p3d = (point: Point3D) => { }
let p2d = (point: Point2D) => { }
// 函数参数的双向协变
p3d = p2d
// "strictFunctionTypes": false,关闭配置才可以相等
p2d = p3d

// 3.返回值类型
let funR1 = () => ({ name: '张三' })
let funR2 = () => ({ name: '张三', age: 18 })
funR1 = funR2

function overload(a: number, b: number): number;
function overload(a: string, b: string): string;
function overload(a: any, b: any): any { };
// 枚举兼容性
enum Fenum {
  apple,
  banana
}
enum Cenum {
  red,
  yellow
}
let fenum: Fenum.apple = 3
// 不同枚举互不兼容
// let cenum: Cenum.red = Fenum.apple


// 类兼容性  构造函数和静态元素不被比较  拥有私有属性的只能父类和子类兼容
class A {
  constructor(a: number, b: number) {
  }
  id: number = 1
  private name: string
}
class B {
  constructor(a: number) {
  }
  id: number = 1
  private name: string
}
let aaa = new A(1, 2)
let bbb = new B(1)
// aaa = bbb
// bbb = aaa
class AChilder extends A {
  id: number = 1
}
let achilder = new AChilder(1, 2)
achilder = aaa

// 泛型兼容性
interface empty<T> {
  id: T
}
// 类型参数T被接口成员使用才会影响泛型的兼容性
// let obj1: empty<number> = {}
// let obj2: empty<string> = {}
// obj1 = obj2
let funEm1 = <T>(x: T): T => { return x }
let funEm2 = <U>(y: U): U => { return y }
funEm1 = funEm2