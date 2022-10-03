// https://leetcode.cn/problems/check-if-binary-string-has-at-most-one-segment-of-ones/

/**
 * @param {string} s
 * @return {boolean}
 */
 var checkOnesSegment = function(s) {
  for (let i = 1; i < s.length; i++) {
    // 也就是在找 01串
    if (s[i] === '1' && s[i - 1] === '0') {
      return false
    }
  }
  return true
};