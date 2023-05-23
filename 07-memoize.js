const _ = require('lodash')
function cycle(r) {
  console.log('开始计算了')
  return Math.PI * r * r
}
const meomoize = myMeomoize(cycle)
// console.log(_.memoize)

function myMeomoize(fn) {
  const cacheList = {}
  return function () {
    const key = JSON.stringify(fn)
    if (!cacheList[key]) {
      cacheList[key] = fn.call(this, ...arguments)
    }
    return cacheList[key]
  }
}

meomoize(10)
meomoize(10)
meomoize(10)
meomoize(10)
meomoize(10)
