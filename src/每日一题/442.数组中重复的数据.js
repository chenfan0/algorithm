// https://leetcode-cn.com/problems/find-all-duplicates-in-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

function findDuplicates(nums) {
  const n = nums.length
  const result = []
  const swap = function (nums, x, y) {
    [nums[x], nums[y]] = [nums[y], nums[x]]
  }

  for (let i = 0; i < n; i++) {
    // 当对应下标值和当前的value值不一样就进行交换
    while (nums[i] !== nums[nums[i] - 1]) {
      swap(nums, i, nums[i] - 1)
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      result.push(nums[i])
    }
  }
  return result
}
