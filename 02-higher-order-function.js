// 函数做为另一个函数的返回值
function makeFn() {
  return () => {
    console.log('返回一个函数')
  }
}
/* const fn = makeFn()
fn() */
// makeFn()()

function once(fn) {
  let done = false
  return function () {
    if (!done) {
      done = true
      return fn.call(this, ...arguments)
    }
  }
}

const pay = once(price => {
  console.log('支付' + price)
})

pay(5)
pay(5)
pay(5)
pay(5)
