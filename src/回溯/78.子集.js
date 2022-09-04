// https://leetcode.cn/problems/subsets/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) { 
  const result = []

  const recurse = (index, res = []) => {
    if (index >= nums.length) {
      result.push([...res])
      return
    }
    recurse(index + 1, res)
    res.push(nums[index])
    recurse(index + 1, res)
    res.pop()
  }
  recurse(0)
  return result
}