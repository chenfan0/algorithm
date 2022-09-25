// https://leetcode.cn/problems/rotated-digits/

/**
 * @param {number} n
 * @return {number}
 */
 var rotatedDigits = function(n) {
  let res = 0
  for (let i = 1; i <= n; i++) {
    const str = i + ''
    // 如果包含 3 4 7则不是一个好数
    if (str.includes('3') || str.includes('4') || str.includes('7')) {
      continue
    }
    // 如果没有包含 3 4 7 且拥有 至少一个 2 或 5 或 6 或 9 则是一个好数
    if (str.includes('2') || str.includes('5') || str.includes('6') || str.includes('9')) {
      res++
    }
  }

  return res
};