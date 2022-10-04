// https://leetcode.cn/problems/jump-game-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
  // 动态规划
  const dp = new Array(nums.length).fill(Infinity)
  dp[0] = 0

  for (let i = 1; i < nums.length; i++) {

    for (let j = i - 1; j >= 0; j--) {
      const step = nums[j]
      if (step >= i - j) {
        dp[i] = Math.min(dp[i], dp[j] + 1)
      }
    }
  }
  return dp[nums.length - 1]
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
  // 贪心
  let minSteps = 0
  let end = 0
  // 当前能达到的最远位置
  let maxPosition = 0
  // 这里nums.length - 1是因为只要能到达最后一个位置即可
  for (let i = 0; i < nums.length - 1; i++) {
    maxPosition = Math.max(i + nums[i], maxPosition)
    if (i === end) { // 说明到达了上一次能跳的最远位置，需要进行下一次跳跃了
      end = maxPosition
      minSteps++
    }
  }
  return minSteps
 }