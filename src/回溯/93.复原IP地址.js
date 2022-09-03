// https://leetcode.cn/problems/restore-ip-addresses/

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) { 
  const result = []
  function recurse(index, res) {
    if (res.length > 4) return
    if (index === s.length) {
      if (res.length === 4) {
        result.push([...res].join('.'))
      }
      return
    }
    for (let i = index + 1; i <= index + 3; i++) {
      if (i > s.length) return
      const str = s.slice(index, i)
      // 如果当前字符串长度为1或者不是0开头并且不大于255那么就进行递归
      if (str.length === 1 || !str.startsWith('0') && Number(str) <= 255) {
        res.push(str)
        recurse(i, res)
        res.pop()
      }
    }
  }
  recurse(0, [])
  return result
}