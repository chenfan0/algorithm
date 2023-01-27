// https://leetcode.cn/problems/word-break/description/
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  // 动态规划
  const len = s.length
  const dp = new Array(len + 1).fill(false)
  dp[0] = true
  // i 字符之前是否满足
  for (let i = 1; i <= len; i++) {
    // 对 i 之前的字符进行切割判断是否存在于wordDict并且dp[j]为true
    for (let j = 0; j < i; j++) {
      const subS = s.slice(j, i)
      if (wordDict.includes(subS) && dp[j]) {
        dp[i] = true
        break
      }
    }
  }
  return dp[len]
}

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  // 递归
  const len = s.length
  const help = new Array(len + 1).fill(undefined)
  const recurse = (start) => {
    if (start === len) {
      return true
    }
    if (help[start] !== undefined) return help[start]

    for (let i = start + 1; i <= len; i++) {
      const str = s.slice(start, i)
      if (wordDict.includes(str) && recurse(i)) {
        help[i] = true
        return true
      }
    }
    help[start] = false
    return false
  }

  return recurse(0)
}