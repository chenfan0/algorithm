// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv/


/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  // 买卖股票的最佳时机III类似,  2次时有四种状态，所以k次有2 * k种状态
  // 然后根据 III 的情况即可
  const dp = new Array(2 * k).fill(-Infinity)

  for (let i = 0; i < prices.length; i++) {
    for (let j = 0; j < dp.length; j++) {
      if (j % 2 === 0) {
        dp[j] = Math.max(dp[j], (dp[j - 1] || 0) - prices[i])
      } else {
        dp[j] = Math.max(dp[j], dp[j - 1] + prices[i])
      }
    }
  }
  return dp[2 * k - 1]
}