// https://leetcode-cn.com/problems/minimum-path-sum/
// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
// 说明：每次只能向下或者向右移动一步。

function minPathSum(grid) {
  const row = grid.length
  const col = grid[0].length
  const dp = new Array(row).fill(0).map(() => new Array(col).fill(0))
  dp[0][0] = grid[0][0]

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0 && j > 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j]
      } else if (j === 0 && i > 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j]
      } else if (i > 0 && j > 0) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
      }

    }
  } 

  return dp[row - 1][col - 1]
}

