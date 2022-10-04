// https://leetcode.cn/problems/delete-operation-for-two-strings/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  // 求最长公共子序列，然后在进行删除
  const n1 = word1.length
  const n2 = word2.length
  const dp = new Array(n1 + 1).fill(0).map(_ => new Array(n2 + 1).fill(0))

  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  const minLen = dp[n1][n2]
  return n1 + n2 - 2 * minLen
}

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
  const n1 = word1.length
  const n2 = word2.length
  const dp = new Array(n1 + 1).fill(0).map(_ => new Array(n2 + 1).fill(0))
  for (let i = 0; i <= n1; i++) {
    dp[i][0] = i
  }
  for (let j = 0; j <= n2; j++) {
    dp[0][j] = j
  }

  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1
      }
    }
  }
  return dp[n1][n2]
}