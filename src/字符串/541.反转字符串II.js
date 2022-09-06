// https://leetcode.cn/problems/reverse-string-ii/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) { 
  const arr = s.split('')

  let start = 0, end = start + k
  if (end >= s.length) return arr.reverse().join('')

  while (start < s.length) {
    let i = start, j = end - 1
    if (j >= s.length) j = s.length - 1
    while (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++
      j--
    }
    start += 2 * k
    end = start + k
  }

  return arr.join('')
}