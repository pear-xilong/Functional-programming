const _ = require('lodash')

const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = str => str.toUpperCase()

const f = compose(toUpper, first, reverse)
console.log(f([1, 2, 'three']))

function compose(...args) {
  return function (value) {
    return args.reverse().reduce((prev, next) => {
      return next(prev)
    }, value)
  }
}
