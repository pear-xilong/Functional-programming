// 偏函数: 固定一个函数的一个或多个参数, 返回一个可以接受剩余参数的函数
/* function wrapFunc(fn, fixedValue) {
  function wrappedFunc(input) {
    const result = fn(input, fixedValue)
    return result
  }
  return wrappedFunc
}

function multiply(x, y) {
  return x * y
}

const multiply3 = wrapFunc(multiply, 3)

console.log(multiply3(4))
console.log(multiply3(5))
 */

function generateOrderData(type, area, settlement) {
  // 省略数十行难以理解的业务逻辑......
}

// 文件 a
const res = generateOrderData('food', 'hunan', normalSettlement)

// 文件 b
const UIData = generateOrderData('food', 'hunan', orderSettlement)

// 文件 c
const result = generateOrderData('food', 'hunan', couponSettlement)

function generateSpecOrderData(type, area) {
  return function (settlement) {
    // 省略数十行难以理解的业务逻辑......
    const result = generateOrderData(type, area, settlement)
    return result
  }
}

const generateFoodHunanOrderData = generateSpecOrderData('food', 'hunan')
// 文件 a
const res2 = generateFoodHunanOrderData(normalSettlement)

// 文件 b
const UIData2 = generateFoodHunanOrderData(orderSettlement)

// 文件 c
const result2 = generateFoodHunanOrderData(couponSettlement)
