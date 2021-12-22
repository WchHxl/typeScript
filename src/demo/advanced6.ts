/*
 * @Author: wch
 * @Date: 2021-12-22 11:48:44
 * @LastEditTime: 2021-12-22 16:30:43
 * @LastEditors: your name
 * @Description: 条件类型
 * @FilePath: \typeScript\src\advanced6.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
type TypeName<T> =
  T extends string ? 'string' :
  T extends number ? 'number' :
  T extends boolean ? 'boolean' :
  T extends undefined ? 'undefined' :
  T extends Function ? 'function' : 'object';
type T1 = TypeName<string>
type T2 = TypeName<string[]>

// T extends U ? X : Y
// (A|B) extends U ? X : Y
// A extends U ? X : Y | B extends U ? X : Y
type T3 = TypeName<string | string[]>

type Diff<T, U> = T extends U ? never : T
type T4 = Diff<'a' | 'b' | 'c', 'b' | 'e'>
// Diff<'a', 'b'|'e'> |Diff<'b', 'b'|'e'> |Diff<'c', 'b'|'e'>
// 'a' | never | 'c'
// 'a' | 'c'
type NotNull<T> = Diff<T, null | undefined>
type T5 = NotNull<string | number | null | boolean | undefined | object | symbol>

// Exclude<T, U> === ↑↑↑ Diff<T, U>
// NotNullable<T> === ↑↑↑ NotNull<T>
// Extract<T, U>
type T6 = Extract<string | number | null | boolean | undefined | object | symbol, string | number | boolean | object | symbol>

type T7 = ReturnType<() => string>