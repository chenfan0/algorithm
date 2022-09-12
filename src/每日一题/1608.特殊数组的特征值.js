// https://leetcode.cn/problems/special-array-with-x-elements-greater-than-or-equal-x/
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  const n = nums.length
  nums.sort((x, y) => x - y)

  for (let i = 1; i <= n; i++) {
    let j = 0
    let count = 0

    while (j < n) {
      if (nums[j] >= i) {
        count++
      }
      j++
    }
    if (count === i) {
      return count
    }
  }
  return -1
}