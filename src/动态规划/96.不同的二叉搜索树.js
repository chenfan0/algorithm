// https://leetcode.cn/problems/unique-binary-search-trees/description/

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const dp = new Array(n + 1).fill(0)
  dp[0] = dp[1] = 1

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j]
    }
  }

  return dp[n]
}