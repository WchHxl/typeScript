/*
 * @Author: wch
 * @Date: 2021-11-23 17:18:34
 * @LastEditTime: 2021-11-25 17:11:22
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
function getLanguage(type: Type) {
  let lang = type === Type.Strong ? new JAVA() : new JAVASCRIPT()
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
  // typeof

  return lang
}
getLanguage(Type.Strong)
