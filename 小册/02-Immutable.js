// 引入 immutable 库里的 Map 对象，它用于创建对象
// import { Map } from 'immutable'
const { Map } = require('immutable')

// 初始化一个对象 baseMap
const originData = Map({
  name: 'xiuyan',
  hobby: 'coding',
  age: 666,
})

// 使用 immutable 暴露的 Api 来修改 baseMap 的内容
const mutatedData = originData.set({
  age: 66.6,
})

// 我们会发现修改 baseMap 后将会返回一个新的对象，这个对象的引用和 baseMap 是不同的
// console.log(originData)
// console.log(mutatedData)
// console.log('originData === mutatedData', originData === mutatedData)

const dataA = Map({
  do: 'coding',
  age: 666,
  from: 'a',
  to: 'b',
})

// 使用 immutable 暴露的 Api 来修改 baseMap 的内容
const dataB = dataA.set({
  age: 66.6,
})

console.dir(dataB)
