// map  every some

/* function map(arr, fn) {
  const results = []
  for (let i = 0; i < arr.length; i++) {
    results.push(fn(arr[i], i, arr))
  }
  return results
}

const arr = [1, 2, 3, 4, 5]
const res = map(arr, t => t ** 2)
console.log(res) */

/* function every(arr, fn) {
  let flag = true
  for (let i = 0; i < arr.length; i++) {
    flag = fn(arr[i], i, arr)
    if (!flag) break
  }
  return flag
}

const arr = [1, 2, 3, 4, 5]
const res = every(arr, t => t > 0)
console.log(res) */

Array.prototype.mysome = function (fn) {
  let flag = false
  for (let i = 0; i < this.length; i++) {
    flag = fn(arr[i], i, arr)
    if (flag) break
  }
  return flag
}

const arr = [1, 2, 3, 4, 5]
const res = arr.mysome(t => t > 10)
console.log(res)
