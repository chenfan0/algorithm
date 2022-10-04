// https://leetcode.cn/problems/distinct-subsequences/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  const dp = new Array(s.length + 1).fill(0).map(_ => new Array(t.length + 1).fill(-1))
  const process = (i, j) => {
    if (dp[i][j] !== -1) return dp[i][j]
    if (j === t.length) return 1  // 满足条件
    if (i === s.length) return 0  // 不满足条件

    if (s[i] === t[j]) {
      // 如果当前两个字符相同，那么可以选择都向前走一步，或者j不动，因为可能s字符串后面还有能满足的
      dp[i + 1][j + 1] = process(i + 1, j + 1)
      dp[i + 1][j] = process(i + 1, j)
      dp[i][j] = dp[i + 1][j] + dp[i + 1][j + 1]
      return dp[i][j]
    }
    dp[i][j] = dp[i + 1][j] = process(i + 1, j)
    return dp[i][j]
  }

  return process(0, 0)
}



/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  const dp = new Array(s.length + 1).fill(0).map(_ => new Array(t.length + 1).fill(0))
  for (let i = 0; i <= s.length; i++) {
    dp[i][0] = 1  // dp[x][0]表示 t字符串为空字符串，所以为1
  }
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      if (s[i - 1] === t[j - 1]) { // 当前两个字符相等
        // dp[i - 1][j - 1]代表选择当前下标 i 的字符
        // dp[i - 1][j] 代表不选择当前下表 i 的字符 
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }
  return dp[s.length][t.length]
}
