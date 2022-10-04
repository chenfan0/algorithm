// https://leetcode.cn/problems/longest-common-subsequence/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  const n1 = text1.length
  const n2 = text2.length
  const dp = new Array(n1 + 1).fill(0).map(_ => new Array(n2 + 2).fill(0))

  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[n1][n2]
}