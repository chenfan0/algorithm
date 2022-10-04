// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/

/**
 * @param {number[]} prices
 * @return {number}
 */
// 只能买卖两笔
var maxProfit = function(prices) {
  // dp0 手里有股票
  // dp1 已经交易过一次，手里没有股票
  // dp2 已经交易过一次，手里有股票
  // dp3 已经交易过两次
  let dp0 = -Infinity, dp1 = 0, dp2 = -Infinity, dp3 = 0

  for (let i = 0; i < prices.length; i++) {
    dp0 = Math.max(-prices[i], dp0)
    dp1 = Math.max(dp1, dp0 + prices[i]) 
    dp2 = Math.max(dp2, dp1 - prices[i])
    dp3 = Math.max(dp3, dp2 + prices[i])
  }
  return dp3
}