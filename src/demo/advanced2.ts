/*
 * @Author: wch
 * @Date: 2021-11-23 17:18:34
 * @LastEditTime: 2021-11-26 14:58:48
 * @LastEditors: your name
 * @Description: 类型保护
 * @FilePath: \typeScript\src\advanced2.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
enum Type {
  Strong, Week
}

class JAVA {
  helloJava() {
    console.log('HELLO JAVA');
  }
  java: any
}
class JAVASCRIPT {
  helloJavaScript() {
    console.log('HELLO JAVASCRIPT');
  }
  javaScript: any
}
function isJava(lang: JAVA | JAVASCRIPT): lang is JAVA {
  return (lang as JAVA).helloJava() !== undefined
}
function getLanguage(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new JAVA() : new JAVASCRIPT()
  // if (isJava(lang)) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()
  // }
  // // instanceof
  // if (lang instanceof JAVA) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()
  // }
  // // in
  // if ('java' in lang) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()
  // }
  // // typeof
  // if (typeof x === 'string') {
  //   console.log(x.length);
  // } else {
  //   console.log(x.toFixed(2));
  // }
  return lang
}
getLanguage(Type.Strong, 'x')
