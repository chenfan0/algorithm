/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function threeSum(nums) {
  if (nums.length < 3) return []
  const result = []
  // 相对数组进行排序
  nums.sort((x, y) => x - y)

  for (let i = 0; i < nums.length; i++) {
    // 因为该数组已经是有序的
    // 如果当前的第一个数已经大于0，则直接跳出循环
    if (nums[i] > 0) break
    // 如果有多个相同的值，只取第一个
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let j = i + 1
    let k = nums.length - 1

    while (j < k) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        j++
        continue
      }
      const sum = nums[i] + nums[j] + nums[k]

      if (sum < 0) {
        j++
      } else if (sum > 0) {
        k--
      } else {
        result.push([nums[i], nums[j], nums[k]])
        // 这里不能使用k--，因为k可能有多个重复值
        j++
      }
    }
  }

  return result
}