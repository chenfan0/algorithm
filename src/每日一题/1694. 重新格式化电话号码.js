// https://leetcode.cn/problems/reformat-phone-number/submissions/
/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
  let _number = ''
  let result = ''
  
  for (let i = 0; i < number.length; i++) {
    if (number[i] === '-' || number[i] === ' ') {
      continue
    }
    _number += number[i]
  }

  let i = 0
  const n = _number.length
  while (i < n) {
    if (i >= n - 4) {
      if (i === n - 4) {
        result += _number.slice(i, i + 2) + '-' + _number.slice(i + 2)
      } else {
        result += _number.slice(i)
      }
      break
    }

    result += _number.slice(i, i + 3) + '-'
    i += 3
  }

  return result
}