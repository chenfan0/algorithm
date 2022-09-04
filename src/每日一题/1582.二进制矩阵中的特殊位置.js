// https://leetcode.cn/problems/special-positions-in-a-binary-matrix/

/**
 * @param {number[][]} mat
 * @return {number}
 */

var numSpecial = function (mat) { 
  const rows = mat.length
  const cols = mat[0].length
  const rowFlags = new Array(rows).fill(false)
  const colFags = new Array(cols).fill(false)
  const recordFlag = (x, y) => [rowFlags[x], colFags[y]] = [true, true]
  let res = 0
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] !== 1) continue
      // 之前的行或者列已经出现过1了，这里需要将i，j记录起来
      if (rowFlags[i] || colFags[j]) {
        recordFlag(i, j)
        continue
      }
      // 来到这里说明当前值为1，同时之前对应的行和列没有出现过1，需要记录
      recordFlag(i, j)
      let _i = i + 1, _j = j + 1
      let shouldSkip = false
      while (_i < rows) {
        if (mat[_i][j] === 1) {
          recordFlag(_i, j)
          shouldSkip = true
        }
        _i++
      }
      while (_j < cols) {
        if (mat[i][_j] === 1) {
          recordFlag(i, _j)
          shouldSkip = true
        }
        _j++
      }
      if (shouldSkip) continue
      res++
    }
  }

  return res
}