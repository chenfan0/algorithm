// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  if (!s) return 0
  const n = s.length
  let l = 0
  let r = 1
  let max = 1
  while (r < s.length) {
    const str = s.substring(l, r + 1)
    // 保证max的值为最大值
    max = Math.max(max, r - l + 1)
    // 如果向右扩充的过程导致字符串有重复值了
    if (str.includes(s[r + 1])) {
      // 左边窗口向右移动
      l++
    } else {
      r++
    }
  }
  return max
}
