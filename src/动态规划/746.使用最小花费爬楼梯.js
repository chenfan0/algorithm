// https://leetcode-cn.com/problems/min-cost-climbing-stairs/
// 给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。
// 一旦你支付此费用，即可选择向上爬一个或者两个台阶。
// 你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。
// 请你计算并返回达到楼梯顶部的最低花费。


function minCostClimbingStairs(cost) {
  const n = cost.length
  if (n === 1) return cost[0]
  if (n === 2) return Math.min(cost[0], cost[1])
  const dp = new Array(n).fill(0)
  dp[0] = cost[0]
  dp[1] = cost[1]

  for (let i = 2; i < n; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]
  }

  return Math.min(dp[n - 1], dp[n - 2])
}