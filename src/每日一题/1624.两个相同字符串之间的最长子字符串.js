// https://leetcode.cn/problems/largest-substring-between-two-equal-characters/

/**
 * @param {string} s
 * @return {number}
 */
 var maxLengthBetweenEqualCharacters = function(s) {

  let result = -1
  for (let i = 0; i < s.length; i++) {
      for (let j = s.length - 1; j > i; j--) {
          if (j - i - 1 <= result) break
          if (s[i] === s[j]) {
              result = Math.max(j - i - 1, result)
          }
      }
  }
  return result
};