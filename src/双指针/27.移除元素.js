// https://leetcode.cn/problems/remove-element/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) { 
  // 当前遍历的下标
  let i = 0
  // 当前满足条件的边界
  let j = 0

  while (i < nums.length) {
    if (nums[i] !== val) {
      nums[j++] = nums[i]
    }
    i++
  }

  return j
}