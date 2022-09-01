// https://leetcode.cn/problems/palindrome-partitioning/
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) { 
  const len = s.length
  const result = []
  // 检测是否为回文串
  const check = (str) => {
    let i = 0, j = str.length - 1

    while (i < j) {
      if (str[i] === str[j]) {
        i++
        j--
        continue
      }
      return false
    }
    return true
  }

  function recurse(i, res) {
    if (i >= len) {
      if (res.length) {
        result.push([...res])
      }
      return
    }
    
    let end = i + 1
    while (end <= len) {
      const str = s.slice(i, end)
      if (check(str)) {
        res.push(str)
        recurse(end, res)
        res.pop()
      }
      end++
    }
  }
  recurse(0, [])
  return result
}