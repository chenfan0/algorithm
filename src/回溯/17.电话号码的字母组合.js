// https://leetcode.cn/problems/letter-combinations-of-a-phone-number/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  const result = []
  function recurse(index, res = []) {
    if (index >= digits.length) {
      res.length > 0 && result.push([...res].join(''))
      return
    }
    const str = map[digits[index]]
    for (let i = 0; i < str.length; i++) {
      res.push(str[i])
      recurse(index + 1, res)
      res.pop()
    }
  }
  recurse(0)
  return result

}