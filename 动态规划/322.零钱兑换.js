// https://leetcode-cn.com/problems/coin-change/

// amount：11
// coins：[1, 2, 5]
// 11所需的最小硬币数
// 等于6所需的最小硬币数加上一枚5的硬币，
// 9所需的最小硬币数加上一枚2的硬币数，
// 10所需的最小硬币数加上一枚1的硬币数中最小的那一个，依次类推
function coinChange(coins, amount) {
  const n = coins.length
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 1; i <= amount; i++) {  // i指的是钱数
    for (let j = 0; j < n; j++) { // j指的是当前硬币数组的下标
      const curCoin = coins[j]
      if (i >= curCoin) {  // 当当前剩余的钱数大于该硬币的金额时
        dp[i] = Math.min(dp[i], dp[i - curCoin] + 1)
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
}