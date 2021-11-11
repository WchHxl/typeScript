/*
 * @Author: wch
 * @Date: 2021-11-11 14:49:44
 * @LastEditTime: 2021-11-11 18:42:08
 * @LastEditors: your name
 * @Description: class
 * @FilePath: \typeScript\src\class1.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
export { }
class Dog {
  // private 类“Dog”的构造函数是私有的，仅可在类声明中访问。无法扩展类“Dog”。类构造函数标记为私有。
  // protected 类“Dog”的构造函数是受保护的，仅可在类声明中访问。
  constructor(name: string) {
    this.name = name
  } 
  name: string
  run() { }
  private pri() { }
  protected pro() { }
  readonly legs: number = 4
  static food: string  = 'bones'
}
console.log(Dog.prototype);
let dog = new Dog("小黄")
// dog.pri() //属性“pri”为私有属性，只能在类“Dog”中访问。
// dog.pro() // 属性“pro”受保护，只能在类“Dog”及其子类中访问。
console.log(dog);
console.log(Dog.food);
// console.log(dog.food); // static类不可以被子类使用

class Husky extends Dog {
  // public 实例属性 color 声名可以省略
  constructor(name: string, public color: string) {
    super(name)
    this.color = color
    //this.pri() //属性“pri”为私有属性，只能在类“Dog”中访问。
    this.pro() // 受保护的类可以在继承的子类中使用
  }
  // color: string
}
let husky = new Husky("小黄", "黑色")
console.log(husky);
console.log(Husky.food);// static类可以被继承
