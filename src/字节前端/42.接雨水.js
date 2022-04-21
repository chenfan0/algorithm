/**
 * @param {number[]} height
 * @return {number}
 */
// 动态规划
function trap(height) {
  const n = height.length
  const leftHelper = new Array(n).fill(0)
  const rightHelper = [...leftHelper]
  
  leftHelper[0] = height[0]
  for (let i = 1; i < n; i++) {
    leftHelper[i] = Math.max(leftHelper[i - 1], height[i])
  }

  rightHelper[n - 1] = height[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    rightHelper[i] = Math.max(rightHelper[i + 1], height[i])
  }
  
  let res = 0
  for (let i = 0; i < n; i++) {
    res += Math.min(leftHelper[i], rightHelper[i]) - height[i]
  }

  return res

}
// 双指针
function trap(height) {
  const n = height.length
  let left = 0, right = n - 1
  let leftMax = 0, rightMax = 0
  let res = 0

  while (left <= right) {
    leftMax = Math.max(leftMax, height[left])
    rightMax = Math.max(rightMax, height[right])

    if (leftMax < rightMax) {
      res += leftMax - height[left++]
    } else {
      res += rightMax - height[right--]
    }
  }
  return res
}