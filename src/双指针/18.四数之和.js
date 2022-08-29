// https://leetcode.cn/problems/4sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) { 
  // 排序
  nums.sort((x, y) => x - y)
  const n = nums.length
  const result = []

  // 因为需要四个元素，所以循环终止条件时 n - 3，
  for (let i = 0; i < n - 3; i++) {
    // 多个相同的元素，只取第一个，防止重复
    if (i > 0 && nums[i] === nums[i - 1]) continue

    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      let k = j + 1
      let l = n - 1
      while (k < l) {
        if (k > j + 1 && nums[k] === nums[k - 1]) {
          k++
          continue
        }
        const sum = nums[i] + nums[j] + nums[k] + nums[l]

        if (sum === target) {
          result.push([nums[i], nums[j], nums[k], nums[l]])
          k++
        } else if (sum < target) {
          k++
        } else {
          l--
        }
      }
    }
  }
  return result
}