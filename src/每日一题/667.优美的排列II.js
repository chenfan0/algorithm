// https://leetcode.cn/problems/beautiful-arrangement-ii/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
  const result = []
  let index = 0
  for (let i = 1; i < n - k; i++) {
    result[index++] = i
  }
  for (let i = n - k, j = n; i <= j; i++) {
    result[index++] = i
    if (i !== j) {
      result[index++] = j--
    }
  }
  return result
}