// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // dp[i][0] 代表第i天，手里没有股票的最大收益
  // dp[i][1] 代表第i天，手里有股票的最大收益
  if (prices.length === 1) return 0
  const dp = new Array(prices.length).fill(0).map(_ => new Array(2).fill(0))
  dp[0][1] = -prices[0]
  dp[1][0] = Math.max(prices[1] - prices[0], 0)
  dp[1][1] = Math.max(-prices[0], -prices[1])

  for (let i = 2; i < prices.length; i++) {
    // 第 i 天手里没有股票等于 第 i - 1 天手里有股票今天卖掉，第 i - 1 天手里没有股票 取利润高的那一个
    // 第 i 天手里有股票 等于 第 i - 2（有冷冻期） 天手里没有股票 + 今天买股票的利润， 第 i - 1天手里有股票的利润，取较高的那个
    dp[i][0] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][0])
    dp[i][1] = Math.max(dp[i - 2][0] - prices[i], dp[i - 1][1])
  }
  return dp[prices.length - 1][0]
}