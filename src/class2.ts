/*
 * @Author: wch
 * @Date: 2021-11-11 18:25:38
 * @LastEditTime: 2021-11-11 18:34:03
 * @LastEditors: your name
 * @Description: class
 * @FilePath: \typeScript\src\class2.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
abstract class Animal {
  constructor() {
  }
  eat() {
    console.log('eat');
  }
  abstract sleep(): void
}

class Duck extends Animal {
  constructor(name: string) {
    super()
    this.name = name
  }
  name: string
  sleep() {
    console.log('sleep');
  }
}
let duck = new Duck('gaga')
console.log(duck);