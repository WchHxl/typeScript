/*
 * @Author: wch
 * @Date: 2021-12-22 11:48:44
 * @LastEditTime: 2021-12-22 11:49:23
 * @LastEditors: your name
 * @Description: 映射类型
 * @FilePath: \typeScript\src\advanced5.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
interface AD_1{ 
  a: string,
  b: number,
  c: string[]
}
/**
 * 同态
 */
// 只读的
type a_ad1 = Readonly<AD_1['a']>
type a_ad2 = Readonly<AD_1>
// 可选的
type a_ad3 = Partial<AD_1>
// 必选的
type a_ad4 = Required<AD_1>
// 选择key
type a_ad5 = Pick<AD_1, 'a' | 'b'>
/**
 * 非同态
 */
type a_ad6 = Record<'d' | 'e', AD_1>
let a_ad6_1: a_ad6['d']['a'] = '123123'