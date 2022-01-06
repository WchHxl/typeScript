/*
 * @Author: wch
 * @Date: 2021-11-15 22:20:51
 * @LastEditTime: 2021-11-16 22:55:58
 * @LastEditors: your name
 * @Description: class-interface
 * @FilePath: \typeScript\src\class-interface.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
interface Human {
  // new (name: string): void
  name: string;
  eat(): void;
}
// 接口只能约束类的共有成员
class Asian implements Human {
  constructor(name: string) {
    this.name = name;
  }
  name: string
  eat() { }
  sleep() { }
}
interface Man extends Human {
  run(): void
}
interface Child {
  cry(): void
}
interface Boy extends Man, Child {

}

let boy: Boy = {
  name: '',
  run() { },
  eat() { },
  cry() { }  
}

class Auto {
  state = 1
  // private state2: number = 2
}
interface AutoInterface extends Auto {
  state3: number
}
class c implements AutoInterface{
  state = 1
  state3 = 3
}
class Bus extends Auto implements AutoInterface {
  state3 = 3
}