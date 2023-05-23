function curry(fn) {
  function generateCurried(prev) {
    return function curried(next) {
      const args = [...prev, next]
      if (args.length >= fn.length) {
        return fn(...args)
      } else {
        return generateCurried(args)
      }
    }
  }

  return generateCurried([])
}

function curry2(fn) {
  return function curried(...args) {
    if (args.length < fn.length) {
      return function () {
        return curried(...args, ...arguments)
      }
    }
    return fn(...args)
  }
}

const curried = curry((a, b, c) => {
  return a + b + c
})
console.log(curried(1)(2)(3))

const curried2 = curry2((a, b, c) => {
  return a + b + c
})
console.log(curried2(1)(2, 3))
