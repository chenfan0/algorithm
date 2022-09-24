// https://leetcode.cn/problems/unique-paths-ii/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
  const rows = obstacleGrid.length
  const cols = obstacleGrid[0].length

  const dp = new Array(rows).fill(0).map(_ => new Array(cols).fill(0))

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0
      } else if (i === 0 && j === 0) {
        dp[i][j] = 1
      } else if (i === 0 && j >= 1) {
        dp[i][j] = dp[i][j - 1]
      } else if (j === 0 && i >= 1) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }
  return dp[rows - 1][cols - 1]
};