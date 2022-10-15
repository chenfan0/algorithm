// https://leetcode.cn/problems/distinct-subsequences-ii/description/

/**
 * @param {string} s
 * @return {number}
 */
 var distinctSubseqII = function(s) {
  const MOD = 10 ** 9 + 7
  // 总结果
  let total = 0
  // 以哪个字符为结尾的个数
  let preSum = new Array(26).fill(0)
  // 以当前字符结尾的子序列个数
  let dp
  for (let i = 0; i < s.length; i++) {
      let index = s.charCodeAt(i) - 97
      // 当前字符结尾的子序列的个数，等于前面的子序列和 + 1 再减去重复的
      dp = (total + 1 - preSum[index] + MOD) % MOD
      preSum[index] = (preSum[index] + dp) % MOD
      total = (total + dp) % MOD
  }
  return total
};