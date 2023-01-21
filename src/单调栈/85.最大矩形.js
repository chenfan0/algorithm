
// https://leetcode.cn/problems/maximal-rectangle/description/
var largestRectangleArea = function(heights) {
  const stack = [], left = [], right = []
  const n = heights.length
  let max = Number.MIN_SAFE_INTEGER

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && heights[i] <= heights[stack[stack.length - 1]]) {
      stack.pop()
    }
    right[i] = stack.length ? stack[stack.length - 1] : -1
    stack.push(i)
  }
  stack.length = 0

  for (let i = 0; i < n; i++) {
    while(stack.length && heights[i] <= heights[stack[stack.length - 1]]) {
      stack.pop()
    }
    left[i] = stack.length ? stack[stack.length - 1] : -1
    stack.push(i)
  }

  for (let i = 0; i < n; i++) {
    const leftLimit = left[i] === -1 ? 0 : left[i] + 1
    const rightLimit = right[i] === -1 ? n - 1 : right[i] - 1
    max = Math.max(max, (rightLimit - leftLimit + 1) * heights[i])
  }

  return max
};
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  // 每一行获取height，然后调用84题获取结果
  const row = matrix.length, col = matrix[0].length
  const heights = new Array(row).fill(0).map(_ => new Array(col).fill(0))
  let max = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const val = matrix[i][j]
      if (val === '0') {
        heights[i][j] = 0
      } else {
        if (i > 0) {
          heights[i][j] = heights[i - 1][j] + 1
        } else {
          heights[i][j] = 1
        }
      }
    }
  }
  for (let i = 0; i < row; i++) {
    console.log(heights[i])
    max = Math.max(largestRectangleArea(heights[i]), max)
  }
  return max
};