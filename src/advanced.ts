/*
 * @Author: wch
 * @Date: 2021-11-23 17:18:34
 * @LastEditTime: 2021-11-23 18:26:33
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