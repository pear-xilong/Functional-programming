/* function compare(min, age) {
  return age >= min
}

console.log(compare(10, 18))
console.log(compare(10, 18))
console.log(compare(10, 18))
 */

function compare(min) {
  return function (age) {
    return age >= min
  }
}
const compare2 = min => age => age >= min
console.log(compare2)
console.log(compare2(10)(5))
const compare18 = compare(18)
const compare20 = compare(20)
// console.log(compare18(18))
// console.log(compare18(20))
// console.log(compare18(24))
