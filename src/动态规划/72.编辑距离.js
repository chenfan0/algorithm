// https://leetcode.cn/problems/edit-distance/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function (word1, word2) { 
  const n1 = word1.length
  const n2 = word2.length
  const dp = new Array(n1 + 1).fill(0).map(_ => new Array(n2 + 1).fill(0))

  // 初始化dp
  // '' 和 word2
  for (let i = 0; i <= n1; i++) {
    dp[i][0] = i
  }
  // word1 和 ''
  for (let j = 0; j <= n2; j++) {
    dp[0][j] = j
  }

  for (let i = 1; i <= n1; i++) {
    const s1 = word1[i - 1]
    for (let j = 1; j <= n2; j++) {
      const s2 = word2[j - 1]

      if (s1 === s2) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
      }
    }
  }

  return dp[n1][n2]
}