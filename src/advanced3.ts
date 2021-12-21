/*
 * @Author: wch
 * @Date: 2021-11-26 15:57:03
 * @LastEditTime: 2021-11-26 18:16:29
 * @LastEditors: your name
 * @Description: 交叉类型和联合类型
 * @FilePath: \typeScript\src\advanced3.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
interface DogInterface {
  run(): void
}
interface CatInterface {
  jump(): void
}
let pet: DogInterface & CatInterface = {
  run() { },
  jump() { }
}

let strNum: number | string = 3
let b: 'a' | 'b'
class Dog implements DogInterface {
  run() { } eat() { }
}
class Cat implements CatInterface {
  jump() { } eat() { }
}
enum Master { Boy, Girl }
function getPet(master: Master) {
  let pet = master == Master.Boy ? new Dog() : new Cat();
  pet.eat()// pet.run()
  return pet
}
interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle {
  kind: 'circle',
  r: 1
}
type Shape = Square | Rectangle | Circle
function area(s: Shape) {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.height * s.width;
    case "circle":
      return Math.PI * s.r ** 2;
    default:
      return ((e: never) => { throw new Error(e); })(s)
  }
}
console.log(area({
  kind: 'circle',
  r: 1
}))