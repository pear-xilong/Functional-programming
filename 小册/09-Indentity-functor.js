const fruits = ['apple', 'orange', 'banana', 'papaya']

const fruitsWithSugar = fruits.map(fruit => `Super Sweet ${fruit}`)

// console.log(fruitsWithSugar)

const Indentity = x => {
  return {
    map: f => Indentity(f(x)),
    valueOf: () => x,
    inspect: () => `Identity {${x}}`,
  }
}

const newIndentity = Indentity(10).map(x => x)
console.log(newIndentity.valueOf())
