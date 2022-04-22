// https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */

function lastRemaining(n, m) {
  if (n === 1) return 0
  const x = lastRemaining(n - 1, m)
  return (m + x) % n
}
