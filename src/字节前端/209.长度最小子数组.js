// https://leetcode-cn.com/problems/minimum-size-subarray-sum/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

function minSubArrayLen(target, nums) {
  let left = 0
  let right = 0
  const n = nums.length
  let sum = 0
  let min = Number.MAX_SAFE_INTEGER
  while (right < n) {
    if (sum < target) {
      sum += nums[right++]
    } else {
      // 这里right - left
      // 是因为当满足该条件时，right的值已经加过1了
      min = Math.min(min, right - left)
      sum -= nums[left++]
    } 
  }
  while (left < n && sum >= target) {
    min = Math.min(min, right - left)
    sum -= nums[left++]
  }
  return min === Number.MAX_SAFE_INTEGER ? 0 : min
}
