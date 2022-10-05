// https://leetcode.cn/problems/last-stone-weight-ii/

/**
 * @param {number[]} stones
 * @return {number}
 */

// 和 416题 类似
 var lastStoneWeightII = function(stones) {
  const n = stones.length
  if (n === 1) return stones[0]
  if (n === 2) return Math.abs(stones[0] - stones[1])
  const total = stones.reduce((prev, cur) => prev + cur)
  const target = Math.ceil(total / 2)
  const dp = new Array(target + 1).fill(false)
  dp[0] = true

  for (let i = 0; i < n; i++) {
    // 内外层循环不能交换
    // 内部循环从大到小，详情可以看 416 题
    for (let j = target; j >= stones[i]; j--) {
      dp[j] = dp[j - stones[i]] || dp[j]
    }
  }
  const maxIndex = dp.lastIndexOf(true)
  return Math.abs(maxIndex - (total - maxIndex))
};