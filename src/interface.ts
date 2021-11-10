/*
 * @Author: wch
 * @Date: 2021-11-10 11:41:40
 * @LastEditTime: 2021-11-10 18:57:03
 * @LastEditors: your name
 * @Description: interface
 * @FilePath: \typeScript\src\interface.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
interface List {
  readonly id: number, // 只读
  name: string,
  age?: string
  // [x: string]: any
}
interface Result {
  data: List[]
}
function render(resule: Result) {
  resule.data.forEach(res => {
    console.log(res.id, res.name)
    if (res.age) {
      console.log(res.age)
    }
  })
}
let result = {
  data: [
    { id: 1, name: '123123', age: '18' },
    { id: 2, name: '12313123123' }
  ]
}
render(result)  // ts采用鸭式辨形法

// render({
//   data: [
//     { id: 1, name: '123123', age: '18'},
//     { id: 2, name: '12313123123' }
//   ]
// } as Result) // 但传入对象自变量的话 就会进行检查 可以用断言

// render(<Result>{
//   data: [
//     { id: 1, name: '123123', age: '18' },
//     { id: 2, name: '12313123123' }
//   ]
// })
// render({
//   data: [
//     { id: 1, name: '123123', age: '18' },
//     { id: 2, name: '12313123123' }
//   ]
// }) // 声名字符串索引

interface StringArray {
  [index: number]: string;
  length: number;
}
let chars: StringArray = { length: 1 }
let chars1: StringArray = ['1']
console.log(chars);
console.log(chars1);

interface StringArray1 {
  [x: string]: string;
  [y: number]: string;
}
let chars2: StringArray1 = {a: '1', b: '1'}
// let chars3: StringArray1 = {a: 1}
console.log(chars2);
// console.log(chars3);
