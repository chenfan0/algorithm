// https://leetcode-cn.com/problems/maximal-square/

// 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。

function maximalSquare(matrix) {
  const row = matrix.length,
    col = matrix[0].length;
  let max = 0;
  const dp = new Array(row).fill(0).map(() => new Array(col).fill(0));

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0 || j === 0) {
        // 如果当前所处位置为最上方或者最左方
        dp[i][j] = matrix[i][j] === "1" ? 1 : 0;
        max = Math.max(dp[i][j], max);
      } else if (i > 0 && j > 0) {
        if (matrix[i][j] === "0") {
          dp[i][j] = 0;
        } else {
          // dp[i][j]去左边右边，左上方的最小值 + 1
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
          max = Math.max(dp[i][j], max);
        }
      }
    }
  }
  return max * max;
}
