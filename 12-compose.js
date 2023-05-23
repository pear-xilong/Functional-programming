function reverse(arr) {
  return arr.reverse()
}

function first(arr) {
  return arr[0]
}

console.log(first(reverse([1, 2, 3, 4, 5])))

function compose(f, g) {
  return function (arr) {
    return f(g(arr))
  }
}

const f = compose(first, reverse)
console.log(f([1, 2, 3]))
