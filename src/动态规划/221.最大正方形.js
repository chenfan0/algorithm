// https://leetcode-cn.com/problems/maximal-square/

// 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。

function maximalSquare(matrix) {
  const m = matrix.length
  const n  = matrix[0].length
  // 以当前节点为矩形最右点
  const dp = new Array(m).fill(0).map(_ => new Array(n).fill(0))
  let res = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '0') {
        continue
      } else if (i === 0 || j === 0) {
        dp[i][j] = 1
        res = Math.max(1, res)
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
        res = Math.max(res, dp[i][j] ** 2)
      }
    }
  }

  return res
}
