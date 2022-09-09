// https://leetcode.cn/problems/guess-number-higher-or-lower-ii/submissions/
/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
  // 记忆化搜索
  const dp = new Array(n + 1).fill(0).map((_) => new Array(n + 1).fill(0));
  const dfs = (l, r) => {
    if (l >= r) return 0;
    if (dp[l][r] !== 0) return dp[l][r];
    let result = Number.MAX_SAFE_INTEGER;
    for (let i = l; i <= r; i++) {
      const cur = Math.max(dfs(l, i - 1), dfs(i + 1, r)) + i;
      result = Math.min(cur, result);
    }
    dp[l][r] = result;
    return result;
  };
  return dfs(1, n);
};

/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
  // 动态规划
  const dp = new Array(n + 1).fill(0).map((_) => new Array(n + 1).fill(0));

  for (let len = 1; len <= n; len++) {
    for (let l = 1; l + len <= n; l++) {
      const r = l + len;
      dp[l][r] = Number.MAX_SAFE_INTEGER;
      for (let i = l; i <= r; i++) {
        let cur;
        if (i === r) {
          // i === r时 dp[i + 1][r]越界
          cur = dp[l][i - 1] + i
        } else {
          cur = Math.max(dp[l][i - 1], dp[i + 1][r]) + i;
        }
        dp[l][r] = Math.min(cur, dp[l][r]);
      }
    }
  }

  return dp[1][n];
};
