const _ = require('lodash')

const arr = [1, 2, 3, 4, 5]

console.log(_.first(arr))
console.log(_.first(arr))
console.log(_.first(arr))
console.log(_.last(arr))

console.log(_.reverse(arr))
const res = _.each(arr, t => {
  console.log(t)
})
console.log(res)

console.log(arr)
const res2 = arr.forEach(t => console.log(t))
console.log(res2)
