// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/

// 给定一个数组 prices ，其中 prices[i] 表示股票第 i 天的价格。
// 在每一天，你可能会决定购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以购买它，然后在 同一天 出售。
// 返回 你能获得的 最大 利润 。

function maxProfit(prices) {
  const n = prices.length
  // dp0表示当天手里没有股票的最大收益
  // dp1表示当天手里有股票的最大收益
  let dp0 = 0, dp1 = -prices[0]

  for (let i = 1; i < n; i++) {
    dp0 = Math.max(dp0, dp1 + prices[i])
    dp1 = Math.max(dp1, dp0 - prices[i])
  }
  return dp0
}

function maxProfit(prices) {
  let profit = 0
  let minIndex = -1
  const n = prices.length
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1] && minIndex === -1) {
      minIndex = i
    }
    if (prices[i] >= prices[i + 1] && minIndex !== -1) {
      profit += prices[i] - prices[minIndex]
      minIndex = -1
    }
  }
  if (minIndex !== -1) {
    profit += prices[n - 1] - prices[minIndex]
  }

  return profit
}
