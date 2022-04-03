// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

// 当前值减去，当前值前面最小的那个
function maxProfit(prices) {
  if (prices.length <= 1) return 0
  let min = prices[0]
  let max = 0
  for (let i = 1; i < prices.length; i++) {
    max = Math.max(max, prices[i] - min)
    min = Math.min(min, prices[i])
  }
  return max
}
