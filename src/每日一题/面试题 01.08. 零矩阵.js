https://leetcode.cn/problems/zero-matrix-lcci/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 使用两个集合
 var setZeroes = function(matrix) {
  const rowSet = new Set()
  const colSet = new Set()
  const row = matrix.length
  const col = matrix[0].length

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === 0) {
        rowSet.add(i)
        colSet.add(j)
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (rowSet.has(i) || colSet.has(j)) {
        matrix[i][j] = 0
      }
    }
  }
 }


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 使用两个变量
 var setZeroes = function(matrix) {
  const row = matrix.length
  const col = matrix[0].length
  let rowFlag = false
  let colFlag = false

  for (let i = 0; i < col; i++) {
    if (matrix[0][i] === 0) {
      rowFlag = true
      break
    }
  }
  for (let i = 0; i < row; i++) {
    if (matrix[i][0] === 0) {
      colFlag = true
      break
    }
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0
        matrix[i][0] = 0
      }
    }
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0
      }
    }
  }
  if (rowFlag) {
    for (let i = 0; i < col; i++) {
      matrix[0][i] = 0
    }
  }
  if (colFlag) {
    for (let i = 0; i < row; i++) {
      matrix[i][0] = 0
    }
  }
 }