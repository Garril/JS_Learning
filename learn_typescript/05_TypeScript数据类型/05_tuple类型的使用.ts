// tuple元组: 多种元素的组合
// "why" 18 1.88

// 1.数组的弊端
// const info: any[] = ["why", 18, 1.88]
// const infoObj = {
//   name: "why",
//   age: 18,
//   height: 1.88
// }

// const name = info[0]
// 因为是一个any数组，你info[0]拿出去的值，他也会认为 name是any
// console.log(name.length) 
// 如果name没有length属性，或者是一个undefined，就会有风险


// 2.元组的特点（可以知道数组内每一项的 类型）
const info: [string, number, number] = ["why", 18, 1.88]
const name = info[0] // 知道你是 string类型
console.log(name.length)
// const age = info[1]
// console.log(age.length)

export {}
