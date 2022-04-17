// https://leetcode-cn.com/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function permute(nums) {
  const result = []
  function recurse(resultItem) {
    if (resultItem.length === nums.length) {
      result.push([...resultItem])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (resultItem.includes(nums[i])) {
        continue
      }
      resultItem.push(nums[i])
      recurse(resultItem)
      resultItem.pop()
    }
  }
  recurse([])
  return result
}

