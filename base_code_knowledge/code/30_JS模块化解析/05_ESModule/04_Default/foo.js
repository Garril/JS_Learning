const name = "why"
const age = 18

const foo = "foo value"

// 1.默认导出的方式一: （export中加 as default）
export {
  // named export
  name,
  // age as default,
  // foo as default
}

// 2.默认导出的方式二: 常见
export default foo

// 注意: 默认导出只能有一个！！！像上面两个as default会报错

