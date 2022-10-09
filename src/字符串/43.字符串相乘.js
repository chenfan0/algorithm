// https://leetcode.cn/problems/multiply-strings/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) { 
  if (num1 === '0' || num2 === '0') return '0'
  const len1 = num1.length, len2 = num2.length, res = new Array(len1 + len2).fill(0)

  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 1; j >= 0; j--) {
      const mul = num1[i] * num2[j]
      const p1 = i + j, p2 = p1 + 1
      // mul + res[p2] 代表的是当前的乘积 + 上一次乘积的进位
      const sum = mul + res[p2]
      res[p1] += Math.floor(sum / 10)
      res[p2] = sum % 10
    }
  }
  if (res[0] === 0) res.shift()
  return res.join('')
}

multiply('123', '456')