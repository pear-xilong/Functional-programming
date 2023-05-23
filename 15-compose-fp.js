// 将 HEllo World 转为 hello-world
const fp = require('lodash/fp')

const f = fp.flowRight(fp.join('-'), fp.map(fp.toLower), fp.split(' '))
console.log(f('HEllo World'))
