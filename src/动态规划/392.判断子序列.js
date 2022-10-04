// https://leetcode.cn/problems/is-subsequence/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 递归
var isSubsequence = function(s, t) {
  const process = (i, j) => {
    if (i === s.length) return true
    if (j === t.length) return false
    if (s[i] === t[j]) {
      return process(i + 1, j + 1)
    }
    return process(i, j + 1)
  }
  return process(0, 0)
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 动态规划
var isSubsequence = function(s, t) {
  const n1 = s.length
  const n2 = t.length
  const dp = new Array(n1 + 1).fill(0).map(_ => new Array(n2 + 1).fill(0))

  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      if (s[i - 1] === t[j - 1]) {
        // 如果相等，则子串长度加1
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        // 如果不想等，则等于 j - 1的子串长度
        dp[i][j] = dp[i][j - 1]
      }
    }
  }
  return dp[n1][n2] === s.length
}