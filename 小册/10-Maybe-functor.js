const isEmpty = x => x === undefined || x === null

const MaybeFunctor = x => {
  return {
    map: f => (isEmpty(x) ? MaybeFunctor(null) : MaybeFunctor(f(x))),
    valueOf: () => x,
    inspect: () => `Maybe {${x}}`,
  }
}

function add4(x) {
  return x + 4
}

function add8(x) {
  x + 8
}

function toString(x) {
  return x.toString()
}

function addX(x) {
  return x + 'X'
}

function add10(x) {
  return x + '10'
}

const res = MaybeFunctor(10)
  .map(add4)
  .map(add8)
  .map(toString)
  .map(addX)
  .inspect()

// 输出 Maybe {null}
console.log(res)
