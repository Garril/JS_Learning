class Depend {
  constructor() {
    this.reactiveFns = []
  }

  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn)
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

// 封装一个响应式的函数
const depend = new Depend()
function watchFn(fn) {
  depend.addDepend(fn)
}

// 对象的响应式
const obj = {
  name: "why", // depend对象
  age: 18 // depend对象
}

// 监听对象的属性变量: Proxy(vue3)/Object.defineProperty(vue2)
const objProxy = new Proxy(obj, {
  get: function(target, key, receiver) {
    return Reflect.get(target, key, receiver)
  },
  set: function(target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
    depend.notify()
  }
})

watchFn(function() {
  const newName = objProxy.name
  console.log("你好啊, 李银河")
  console.log("Hello World")
  console.log(objProxy.name) // 100行
})

watchFn(function() {
  console.log(objProxy.name, "demo function -------")
})

watchFn(function() {
  console.log(objProxy.age, "age 发生变化是需要执行的----1")
})

watchFn(function() {
  console.log(objProxy.age, "age 发生变化是需要执行的----2")
})

objProxy.name = "kobe"
objProxy.name = "james"
objProxy.name = "curry"

objProxy.age = 100
/* 
这里的缺点就是： 还没有区分开属性，每个属性变化都是 把回调遍历执行一遍


你好啊, 李银河
Hello World
kobe
kobe demo function -------
18 age 发生变化是需要执行的----1
18 age 发生变化是需要执行的----2

你好啊, 李银河
Hello World
james
james demo function -------
18 age 发生变化是需要执行的----1
18 age 发生变化是需要执行的----2

你好啊, 李银河
Hello World
curry
curry demo function -------
18 age 发生变化是需要执行的----1
18 age 发生变化是需要执行的----2

你好啊, 李银河
Hello World
curry
curry demo function -------
100 age 发生变化是需要执行的----1
100 age 发生变化是需要执行的----2

*/