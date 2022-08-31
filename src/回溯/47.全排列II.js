// https://leetcode.cn/problems/permutations-ii/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) { 
  const n = nums.length
  const flags = new Array(n).fill(false)
  const result = []
  // 排序
  nums.sort((x, y) => x - y)

  function recurse(res) {
    if (res.length === n) {
      result.push([...res])
      return
    }
    for (let i = 0; i < n; i++) {
      if (flags[i] || i > 0 && nums[i] === nums[i - 1] && !flags[i - 1]) {
        continue
      }
      flags[i] = true
      res.push(nums[i])
      recurse(res)
      res.pop()
      flags[i] = false
    }
  }
  recurse([])
  return result
}