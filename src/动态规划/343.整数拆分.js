// https://leetcode.cn/problems/integer-break/

/**
 * @param {number} n
 * @return {number}
 */

 var integerBreak = function(n) {
  const dp = new Array(n + 1).fill(0)
  dp[1] = 1
  dp[2] = 1

  for (let i = 3; i <= n; i++) {
    // 这里 j <= (i >> 1)是因为 会出现重复现象， 比如 3 * 4  4 * 3
    for (let j = 1; j <= (i >> 1); j++) {
      // dp[i - j] 不一定 大于 i - j
      // 比如 dp[2] = 1 < 2
      // 所以需要对比 dp[i - j] * j , (i - j) * j
      dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j)
    }
  }
  return dp[n]
 }