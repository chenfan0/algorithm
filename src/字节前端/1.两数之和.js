https://leetcode-cn.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const targetNum = target - nums[i]
    const index = map.get(targetNum)
    if (index !== undefined) {
      return [i, index]
    }
    map.set(nums[i], i)
  }

  return []
}
