// const _ = require('lodash')

function sum(a, b, c) {
  return a + b + c
}

const curried = curry(sum)
console.log(curried(1, 2, 3))
console.log(curried(1, 2)(3))
console.log(curried(1)(2, 3))
console.log(curried(1)(2)(3))

function curry(fn) {
  return function curried(...args) {
    if (args.length < fn.length) {
      return function () {
        return curried(...args, ...[...arguments])
      }
    }
    return fn(...args)
  }
}
