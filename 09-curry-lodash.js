const _ = require('lodash')

function sum(a, b, c) {
  return a + b + c
}

const curried = _.curry(sum)
console.log(curried(1, 2, 3))
console.log(curried(1)(2, 3))
console.log(curried(1, 2)(3))
console.log(curried(1)(2)(3))
console.log(curried(1)(2)(3))
