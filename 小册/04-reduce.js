const arr = [1, 2, 3]

/* const sum = arr.reduce((prev, current) => {
  console.log('循环n次')
  return prev + current
}, 0)
console.log(sum)

const newArr = arr.map(t => ++t)
console.log(newArr)
 */
/* const myMap = (arr, fn) => {
  const newArr = []
  const len = arr.length
  for (let i = 0; i < len; i++) {
    newArr.push(fn(arr[i], i, arr))
  }
  return newArr
}

const arr2 = [1, 2, 3]  
const res = myMap(arr2, t => t + 1)
console.log(res) */
const newArr = arr.reduce((prev, current) => {
  prev.push(current + 1)
  return prev
}, [])
console.log(newArr)
