/*
 * @Author: wch
 * @Date: 2022-01-06 11:39:45
 * @LastEditTime: 2022-01-06 16:37:08
 * @LastEditors: your name
 * @Description: math.test.ts
 * @FilePath: \typeScript\test\math.test.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
const math = require('../src/math')

test("add: 1 + 1 = 2", () => {
  expect(math.add(1, 1)).toBe(2)
})

test("sub：1 - 2 = -1", () => {
  expect(math.sub(1, 2)).toBe(-1)
})
// ts-jest  会检查类型
// babel-jest  不会检查类型 需要npm run test-check
// let x: number = "123"