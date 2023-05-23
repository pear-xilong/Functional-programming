function pipe(...funcs) {
  return function (params) {
    return funcs.reduce((input, fn) => {
      return fn(input)
    }, params)
  }
}
function compose(...funcs) {
  return function (params) {
    return funcs.reduceRight((input, fn) => {
      return fn(input)
    }, params)
  }
}
const fn = pipe(add4, multiply3, divide2)
console.log(fn(10))

const fn2 = compose(divide2, multiply3, add4)
console.log(fn(10))

function add4(num) {
  return num + 4
}

function multiply3(num) {
  return num * 3
}

function divide2(num) {
  return num / 2
}
