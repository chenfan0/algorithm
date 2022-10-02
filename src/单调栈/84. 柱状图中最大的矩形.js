// https://leetcode.cn/problems/largest-rectangle-in-histogram/

/**
 * @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function(heights) {
  // 找左右的第一个比当前小的值 -> 单调栈
  const stack = []
  let max = 0
  const right = []
  const left = []
  for (let i = heights.length - 1; i >= 0; i--) {
    const height = heights[i]

    while (stack.length && height <= heights[stack[stack.length - 1]]) {
      stack.pop()
    }
    right[i] = stack.length ? stack[stack.length - 1] : -1
    stack.push(i)
  }
  stack.length = 0
  for (let i = 0; i < heights.length; i++) {
    const height = heights[i]
    while (stack.length && height <= heights[stack[stack.length - 1]]) {
      stack.pop()
    }
    left[i] = stack.length ? stack[stack.length - 1] : -1
    stack.push(i)
  }

  for (let i = 0; i < heights.length; i++) {
    const leftLimit = left[i] === -1 ? 0 : left[i] + 1
    const rightLimit = right[i] === - 1 ? heights.length - 1 : right[i] - 1
    max = Math.max(max, heights[i] * (rightLimit - leftLimit + 1))
  }
  return max
};