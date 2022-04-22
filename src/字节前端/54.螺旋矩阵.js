// https://leetcode-cn.com/problems/spiral-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

function spiralOrder(matrix) {
  const result = []
  const row = matrix.length
  const col = matrix[0].length
  const length = row * col
  let rowStart = 0, rowEnd = row, colStart = 0, colEnd = col

  function isEnd(arr, length) {
    return arr.length === length
  }

  while (rowStart < rowEnd && colStart < colEnd) {
    let i = rowStart, j = colStart
    
    // 向右遍历
    while (j < colEnd) {
      result.push(matrix[i][j++])
      if (isEnd(result, length)) {
        return result
      }
    }
    j--
    i++
    // 向下遍历
    while (i < rowEnd) {
      result.push(matrix[i++][j])
      if (isEnd(result, length)) {
        return result
      }
    }
    i--
    j--
    // 向左遍历
    while (j >= colStart) {
      result.push(matrix[i][j--])
      if (isEnd(result, length)) {
        return result
      }
    }
    j++
    i--
    // 向上遍历
    while (i > rowStart) {
      result.push(matrix[i--][j])
      if (isEnd(result, length)) {
        return result
      }
    }
    rowStart++
    rowEnd--
    colStart++
    colEnd--
  }

  return result
}
