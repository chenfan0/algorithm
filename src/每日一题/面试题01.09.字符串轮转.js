// https://leetcode.cn/problems/string-rotation-lcci/


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var isFlipedString = function(s1, s2) {
  // 搜索子串
  // if (s1.length !== s2.length) return false
  // return s1.repeat(2).includes(s2)

  if (s1.length !== s2.length) return false
  if (s1.length === 0) return true

  for (let i = 0; i < s1.length; i++) {
    let flag = true
    for (let j = 0; j < s1.length; j++) {
      if (s1[(i + j) % s1.length] !== s2[j]) {
        flag = false
        break
      }
    }
    if (flag) {
      return true
    }
  }
  return false
};