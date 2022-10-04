// https://leetcode.cn/problems/partition-equal-subset-sum/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const total = nums.reduce((prev, cur) => prev + cur)
  if (total % 2 !== 0) return false
  const target = total / 2
  // dp[i]表示 是否能组成 i 
  const dp = new Array(target + 1).fill(false)
  dp[0] = true
  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = dp[j - nums[i]] || dp[j]
    }
  }
  return dp[target]
}