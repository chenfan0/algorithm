// https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
// 递归
function lastRemaining(n, m) {
  if (n === 1) return 0
  const x = lastRemaining(n - 1, m)
  return (m + x) % n
}

// 迭代
function lastRemaining(n, m) {
  if (n === 1) return 0
  let result = 0

  for (let i = 2; i <= n; i++) {
    result = (m + result) % i
  }

  return result
}
