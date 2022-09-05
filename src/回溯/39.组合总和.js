// https://leetcode.cn/problems/combination-sum/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = []

  const process = (index, sum, res = []) => {
    if (sum > target) return
    if (sum === target) {
      result.push([...res])
      return
    }
    if (index >= candidates.length) return
    process(index + 1, sum, res)
    const cur = candidates[index]
    res.push(cur)
    process(index, sum + cur, res)
    res.pop()
  }
  process(0, 0, [])
  return result
}