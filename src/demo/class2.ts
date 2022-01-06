/*
 * @Author: wch
 * @Date: 2021-11-11 18:25:38
 * @LastEditTime: 2021-11-22 16:56:28
 * @LastEditors: your name
 * @Description: class
 * @FilePath: \typeScript\src\class2.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
// 无法创建抽象类实例 new Animal
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
    console.log('duck sleep');
  }
}

let duck = new Duck('gaga')
duck.sleep()
console.log(duck);

class Pig extends Animal {
  sleep() {
    console.log('pig sleep');
  }
}
let pig = new Pig()
let animal: Animal[] = [duck, pig]
animal.forEach(res => {
  res.sleep()
})

class WorkFlow {
  step1() {
    return this
  }
  step2() {
    return this
  }
}
new WorkFlow().step1().step2() // 方法的链式调用

class MyFlow extends WorkFlow { 
  next() {
    return this
  }
}
new MyFlow().next().step1()