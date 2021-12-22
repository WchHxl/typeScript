/*
 * @Author: wch
 * @Date: 2021-11-09 15:14:22
 * @LastEditTime: 2021-11-09 18:15:29
 * @LastEditors: your name
 * @Description: dataType
 * @FilePath: \typeScript\src\dataType.ts
 * 可以输入预定的版权声明、个性签名、空行等
*/
// 原始类型
let bool: Boolean = true;
let str: string = 'dataType'
let num: Number | undefined | null = 911 // 基础类型想要赋值undefined，null 需要在tsconfig关闭strictNullChecks: false 并在声名时添加对应的类型

// 数组
let arr1: Number[] = [1, 2, 3, 4]
let arr2: Array<number | string> = [1, 2, 3, '4']

// 元组: 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
let tuple: [number, string] = [0, '1']
tuple.push(2)
console.log(tuple);

// 函数
let add = (x: number, y: number) => x + y
let compute: (x: number, y: number) => number
compute = (a, b) => a + b
console.log(compute(1, 2))

// 对象: object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
let obj: { x: number, y: string } = { x: 1, y: '1' }

// symbol
let s1: symbol = Symbol();
let s2 = Symbol()
console.log(s1 === s2) // false
console.log(s1 == s2) // false

// undefined, null,默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
let un: undefined = undefined;
let nu: null = null;
num = undefined;
num = null;

// void: void类型像是与any类型相反，它表示没有任何类型
let noReturn = () => { } // 一个没返回的function 就是void

// any: 不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查
let x;
x = 1
x = []
x = () => { }

// nerver: never类型表示的是那些永不存在的值的类型
let error = () => {
  throw new Error("error");
}
let endless = () => {
  while (true) {
    // 永远没有返回 就是nerver
  }
}