// https://leetcode-cn.com/problems/spiral-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

function spiralOrder(matrix) {
  const result = [];
  const row = matrix.length;
  const col = matrix[0].length;
  let rowStart = 0,
    rowEnd = row,
    colStart = 0,
    colEnd = col;
  while (rowStart <= rowEnd && colStart <= colEnd) {
    print(rowStart, rowEnd, colStart, colEnd)
    rowStart++
    colStart++
    rowEnd--
    colEnd--
  }
  function print(i, rowEnd, j, colEnd) {
    while (j < colEnd) {
      result.push(matrix[i][j++])
    }
    j--
    while (i < rowEnd) {
      result.push(matrix[++i][j])
    }
    i--
    while (i !== rowEnd && j >= colStart) {
      result.push(matrix[i][--j])
    }
    j++
    while (j !== colEnd && i > rowStart) {
      result.push(matrix[--i][j])
    }
  }

  return result
}
