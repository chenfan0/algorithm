// https://leetcode.cn/problems/coin-change-2/

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

var change = function (amount, coins) { 
  const dp = new Array(amount + 1).fill(0)
  // 当要组合的金额为0时，即只有一种方法
  dp[0] = 1

  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i]
    for (let j = coin; j <= amount; j++) {
      dp[j] += dp[j - coin]
    }
  }
  return dp[amount]
}
