const _ = require('lodash')

/* function match(reg, str) {
  return str.match(reg)
} */

const curried = _.curry(function (reg, str) {
  return str.match(reg)
})
// console.log(curried)
const matchSpace = curried(/\s+/g)
const matchNum = curried(/\d+/g)
// console.log(matchSpace('tie chui'))
// console.log(matchSpace('tiechui'))

const filterCurried = _.curry(function (func, arr) {
  return arr.filter(func)
})

const findSpace = filterCurried(matchSpace)
console.log(findSpace(['1', '222 222', '333 3']))
