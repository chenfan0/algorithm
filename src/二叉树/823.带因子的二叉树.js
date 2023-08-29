/*
 * @lc app=leetcode.cn id=823 lang=javascript
 *
 * [823] 带因子的二叉树
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
  const len = arr.length
  if (len === 0) return 0
  arr.sort((x, y) => x - y)
  const set = new Set(arr)
  const map = new Map()
  let i = len - 1
  while (i >= 1) {
    const cur = arr[i]
    let k = i - 1
    while (k >= 0) {
      if (cur % arr[k] === 0) {
        const target = cur / arr[k]
        if (set.has(target)) {
          const val = map.get(cur) || []
          val.push([arr[k], target])
          map.set(cur, val)
        }
      }
      k--
    }
    i--
  }
  let res = 0
  for (const key of arr) {
    const val = map.get(key)
    if (!val) {
      map.set(key, 1)
      res = res + 1
    } else {
      let add = 1
      for (const [node1, node2] of val) {
        const val1 = map.get(node1)
        const val2 = map.get(node2)
        add += val1 * val2
      }

      res += add
      map.set(key, add)
    }
  }
  return res % (10 ** 9 + 7)
  

};
// @lc code=end

