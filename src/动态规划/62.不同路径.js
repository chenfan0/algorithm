// https://leetcode-cn.com/problems/unique-paths/
// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
// 问总共有多少条不同的路径？

function uniquePaths(m, n) {
  // 创建dp数组
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
  // 开始位置为1
  dp[0][0] = 1

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 如果当前位置为最上方或者最左方，则只有一种方法
      if (i === 0 || j === 0) {
        dp[i][j] = 1
      } else {
        // 当前的值等于左边的值加上上边的值
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }
  return dp[m - 1][n - 1]
}
