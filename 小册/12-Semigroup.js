// 布尔值的“与”、“或”运算
/* const a = true
const b = false
const c = true

// 与运算结果
const resOfAnd = a && b && c

// 或运算结果
const resOfOr = a || b || c

// 验证与运算是否符合结合律
const isAndAssociative = (a && b && c) === (a && b && c)
// 验证或运算是否符合结合律
const isOrAssociative = (a || b || c) === (a || b || c)

// 验证与运算是否符合闭合原则
const isAndClosed = typeof resOfAnd === 'boolean'
// 验证或运算是否符合闭合原则
const isOrClosed = typeof resOfOr === 'boolean' */

// true true true true
// console.log(isAndAssociative, isOrAssociative, isAndClosed, isOrClosed)

// 字符串的拼接（并集）运算
/* const a = 'xiuyan'
const b = 'is'
const c = 'handsome'

// 等价于 a + b + c
const res = a.concat(b).concat(c)

// 验证是否符合结合律
const isAssociative = a.concat(b).concat(c) === a.concat(b.concat(c))

// 验证是否符合闭合原则
const isClosed = typeof res === 'string'

// true true
console.log(isAssociative, isClosed) */

// 数组的拼接（并集）运算
/* const a = [1, 2]
const b = [3, 4]
const c = [5, 6]

// a + b + c
const res = a.concat(b).concat(c)

// 验证是否符合结合律
// 注意，这里我们判断的是数组的内容是否相等，而不是引用是否相等
const isAssociative =
  a.concat(b).concat(c).toString() == a.concat(b.concat(c)).toString()

// 验证是否符合闭合原则
const isClosed = res instanceof Array

// true true
console.log(isAssociative, isClosed) */

// 定义一个类型为 Add 的 Semigroup 盒子
const Add = value => ({
  value,
  // concat 接收一个类型为 Add 的 Semigroup 盒子作为入参
  concat: box => Add(value + box.value),
})

// 输出一个 value=6 的 Add 盒子
const res = Add(1).concat(Add(2)).concat(Add(3))
console.log(res)
