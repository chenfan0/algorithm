// https://leetcode.cn/problems/largest-values-from-labels/description/

/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} numWanted
 * @param {number} useLimit
 * @return {number}
 */
var largestValsFromLabels = function(values, labels, numWanted, useLimit) {
  const len = values.length
  const idx = Array.from(Array(len), (_, i) => i)
  // idx排序后对应的下标
  idx.sort((x, y) => values[y] - values[x])
  const help = {}
  let chose = 0
  let res = 0
  for (let i = 0; i < len; i++) {
    const val = idx[i]
    const l = labels[val]
    if (help[l] === useLimit) {
      continue
    }
    res += values[val]
    help[l] = (help[l] || 0) + 1
    chose++
    if (chose === numWanted) {
      return res
    }
  }
  return res
};