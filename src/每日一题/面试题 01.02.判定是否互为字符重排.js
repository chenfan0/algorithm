// https://leetcode.cn/problems/check-permutation-lcci/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var CheckPermutation = function(s1, s2) {
  // 哈希表
  const map = new Map()

  for (let i = 0; i < s1.length; i++) {
    const val = map.get(s1[i]) || 0
    map.set(s1[i], val + 1)
  }
  for (let i = 0; i < s2.length; i++) {
    const val = map.get(s2[i])
    // val等于undefined或者等于0
    if (!val) return false
    map.set(s2[i], val - 1)
  }
  for (const [_, val] of map) {
    if (val !== 0) {
      return false
    }
  }
  return true
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function(s1, s2) {
  // 排序
  return s1.length == s2.length && [...s1].sort().join('') === [...s2].sort().join('')
}