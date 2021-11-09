/*
 * @Author: wch
 * @Date: 2021-11-09 18:19:36
 * @LastEditTime: 2021-11-09 18:28:31
 * @LastEditors: your name
 * @Description: enum
 * @FilePath: \typeScript\src\enum.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
// 数字枚举
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}
console.log(Role.Reporter);
console.log(Role);

// 字符串枚举
enum Message {
  Success = '恭喜发财',
  Fail = '升官发财'
}
// 异构枚举
enum Answer {
  N,
  y = 'yes'
}

// 枚举成员
enum Char {
  // const
  a,
  b = Char.a,
  c = 1 + 3,
  // computed
  d = Math.random(),
  e = '123'.length
}

// 常量枚举
const enum Month {
  Jan,
  Feb,
  Mar
}
let month = [Month.Jan, Month.Feb, Month.Mar]
console.log(month);