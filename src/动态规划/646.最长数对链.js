// https://leetcode.cn/problems/maximum-length-of-pair-chain/
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) { 
  const len = pairs.length
  // 先以元素的第一项进行从小到大排序
  pairs.sort((x, y) => x[0] - y[0])
  const dp = new Array(len).fill(1)
  for (let i = 0; i < len; i++) {
    const [first, second] = pairs[i]
    for (let j = i + 1; j < len; j++) {
      const [_first, _second] = pairs[j]
      if (second < _first) {
        dp[j] = Math.max(dp[i] + 1, dp[j])
      }
    }
  }
  return dp[len - 1]
}