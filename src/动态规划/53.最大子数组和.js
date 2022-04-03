// https://leetcode-cn.com/problems/maximum-subarray/
// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组 是数组中的一个连续部分。
const nums = [-2,1,-3,4,-1,2,1,-5,4] // 6


function maxSubArray(nums) {
  const length = nums.length
  let cur = 0
  let max = 0

  for (let i = 0; i < length; i++) {
    cur += nums[i]
    max = Math.max(max, cur)
    // 如果cur小于0，则将其设为0
    cur = cur < 0 ? 0 : cur
  }

  return max
}
