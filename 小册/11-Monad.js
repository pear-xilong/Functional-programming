const isEmpty = x => x === undefined || x === null

const MaybeFunctor = x => {
  return {
    map: f => (isEmpty(x) ? MaybeFunctor(null) : MaybeFunctor(f(x))),
    valueOf: () => x,
    inspect: () => `Maybe {${x}}`,
  }
}

const isExisted = id => id % 3 === 0
const getUser = id => {
  if (isExisted(id)) {
    return {
      id,
      nickName: String(id).slice(0, 3),
    }
  } else {
    throw new Error('User not found')
  }
}

const getUserSafely = id => {
  try {
    const userInfo = getUser(id)
    return MaybeFunctor(userInfo)
  } catch (e) {
    return MaybeFunctor(null)
  }
}

const res = getUserSafely(1110021)

// 输出 'Maybe {[object Object]}'
// console.log(res.inspect())

// 输出 {id: 1110021, nickName: '111'}
// console.log(res.valueOf())

const targetUser = {
  id: 1100013,
  credits: 2000,
  level: 20,
}

const userContainer = MaybeFunctor(targetUser)
const extractUserId = user => user && user.id
const userInfo = userContainer.map(extractUserId).map(getUserSafely)
// console.log(userInfo)
// console.log(userInfo.valueOf())
// console.log(userInfo.valueOf() === userInfo)

// 非线性计算场景下的嵌套 Functor
// 该函数将对给定 score 作权重为 high 的计算处理
const highWeights = score => score * 0.8

// 该函数将对给定 score 作权重为 low 的计算处理
const lowWeights = score => score * 0.5

const computeFinalScore = (generalScore, healthScore) => {
  const finalGeneralScore = highWeights(generalScore)
  const finalHealthScore = lowWeights(healthScore)
  return finalGeneralScore + finalHealthScore
}

const computeFinalScore2 = (generalScore, healthScore) =>
  Identity(highWeights(generalScore)).map(finalGeneralScore =>
    Identity(lowWeights(healthScore)).map(
      finalhealthScore => finalGeneralScore + finalhealthScore
    )
  )

/* const Monad = x => ({
  map: f => Monad(f(x)),
  valueOf: () => x,
  inspect: () => `Monad {${x}}`,

  // 新增一个主动打开盒子的方法 flatMap
  flatMap: f => map(f).valueOf(),
})

const monad = Monad(1)
const nestedMonad = Monad(monad)
// 试试会发生什么？
nestedMonad.flatMap() */

/* class Monad {
  constructor(x) {
    this.val = x
  }

  map(f) {
    return Monad.of(f(this.val))
  }

  flatMap(f) {
    const res = this.map(f)
    console.log(res)
    return res.valueOf()
  }

  valueOf() {
    return this.val
  }
}

Monad.of = function (val) {
  return new Monad(val)
}

const monad = Monad.of(1)
const nestedMonad = Monad.of(monad)
console.log(nestedMonad)
// 输出 Monad {val: 1}，符合“不嵌套”的预期
console.log(nestedMonad.flatMap(x => x)) */

const Monad = x => ({
  map: f => Monad(f(x)),
  // flatMap 直接返回 f(x) 的执行结果
  flatMap: f => f(x),

  valueOf: () => x,
  inspect: () => `Monad {${x}}`,
})

const computeFinalScore3 = (generalScore, healthScore) =>
  Monad(highWeights(generalScore)).flatMap(finalGeneralScore =>
    Monad(lowWeights(healthScore)).flatMap(
      finalhealthScore => finalGeneralScore + finalhealthScore
    )
  )

// 输出计算结果： 210
const finalScore = computeFinalScore3(200, 100)
console.log(finalScore)
