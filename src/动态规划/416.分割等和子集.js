// https://leetcode.cn/problems/partition-equal-subset-sum/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 和 1049题 类似
var canPartition = function(nums) {
  const total = nums.reduce((prev, cur) => prev + cur)
  if (total % 2 !== 0) return false
  const target = total / 2
  // dp[i]表示 是否能组成 i 
  const dp = new Array(target + 1).fill(false)
  dp[0] = true
  for (let i = 0; i < nums.length; i++) {
    // 这里循环是从target到nums[i]
    // 不能反过来，同时内外层循环也不能调换位置
    // 因为每一个数只能使用一次，所以nums必须在外层循环
    // 如果内层循环从小到大，那么 dp[target - nums[i]] 可能已经使用过nums[i]了
    // 而从大到小，dp[target - nums[i]] 还未使用过nums[i]
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = dp[j - nums[i]] || dp[j]
    }
  }
  return dp[target]
}