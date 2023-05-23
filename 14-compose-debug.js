// 将 HEllo World 转为 hello-world
const _ = require('lodash')

const log = v => {
  console.log(v)
  return v
}

const split = _.curry((separator, str) => _.split(str, separator))
const join = _.curry((separator, arr) => _.join(arr, separator))
const map = _.curry((fn, arr) => _.map(arr, fn))

const f = _.flowRight(join('-'), log, map(_.toLower), split(' '))
console.log(f('HEllo World'))
