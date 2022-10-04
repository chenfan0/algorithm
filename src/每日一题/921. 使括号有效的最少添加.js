// https://leetcode.cn/problems/minimum-add-to-make-parentheses-valid/
/**
 * @param {string} s
 * @return {number}
 */
 var minAddToMakeValid = function(s) {
  let leftCount = 0
  let res = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      leftCount++
      continue
    }
    if (s[i] === ')') {
      if (leftCount === 0) {
        res++
      } else {
        leftCount--
      }
    }
  }
  return res + leftCount
};