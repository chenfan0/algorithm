https://leetcode.cn/problems/house-robber/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const n = nums.length
  if (n === 1) return nums[0]
  const dp = new Array(n).fill(0)
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])

  for (let i = 2; i < n; i++) {
    // dp[i] 等于前一天的收货与前两天加今天的收货 取最大值
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }
  return dp[n - 1]
}