// 函数做为另一个函数的形参
// foreach
function foreach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i, arr)
  }
}

/* const arr = [1, 2, 3, 4, 5, 6, 7]
foreach(arr, (item, index, arr) => {
  console.log(item, index)
}) */

// filter
function filter(arr, fn) {
  const results = []
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i, arr) && results.push(arr[i])
  }
  return results
}

const arr = [1, 2, 3, 4, 5, 6, 7]
const res = filter(arr, (item, index, arr) => {
  return item % 2 === 0
})
console.log(res)
