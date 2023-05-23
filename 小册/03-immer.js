const { produce } = require('immer')
// 这是我的源数据
/* const baseState = [
  {
    name: '修言',
    age: 99,
  },
  {
    name: '秀妍',
    age: 100,
  },
] */

// 定义数据的写逻辑
/* const recipe = draft => {
  draft.push({ name: 'xiuyan', age: 101 })
  draft[1].age = 102
} */

// 借助 produce，执行数据的写逻辑
/* const nextState = produce(baseState, draft => {
  draft.push({ name: 'xiuyan', age: 101 })
  draft[1].age = 102
})
console.log(baseState)
console.log(nextState) */

function myProduce(base, recipe) {
  let copy
  let draft = new Proxy(base, {
    set(target, key, value) {
      if (!copy) {
        copy = { ...base }
      }
      copy[key] = value
      return true
    },
  })

  recipe(draft)
  return Object.freeze(copy || base)
}

// 这是我的源对象
const baseObj = {
  a: 1,
  b: {
    name: '修言',
  },
}

const changedObjA = myProduce(baseObj, draft => {
  draft.a = 2
})

// 借助 produce，对源对象应用读操作
const doNothingObj = myProduce(baseObj, draft => {
  console.log('doNothing function is called, and draft is', draft)
})

console.log(changedObjA)
console.log(doNothingObj)

console.log(changedObjA === baseObj)
console.log(doNothingObj === baseObj)
console.log(changedObjA === doNothingObj)
console.log(changedObjA.b === baseObj.b)
console.log(changedObjA.b === doNothingObj.b)
