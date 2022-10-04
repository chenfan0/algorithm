// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
 var maxProfit = function(prices, fee) {
  const dp = new Array(prices.length).fill(0).map(_ => new Array(2).fill(0))
  dp[0][1] = -prices[0]

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][1] + prices[i] - fee, dp[i - 1][0])
    dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1])
  }
  return dp[prices.length - 1][0]
};