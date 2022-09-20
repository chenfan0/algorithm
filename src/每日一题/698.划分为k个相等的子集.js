/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
  // 升序排序
  // 减少后续递归次数
  nums.sort((x, y) => y - x)
  const total = nums.reduce((prev, cur) => prev + cur)
  if (total % k !== 0) return false
  const target = total / k
  const bucket = new Array(k).fill(0)

  const dfs = (index, bucket = []) => {
    if (index === nums.length) return true

    for (let i = 0; i < k; i++) {
      if (bucket[i] + nums[index] > target) continue
      // 前一次的值和当前一样，则跳过
      if (i > 0 && bucket[i] === bucket[i - 1]) continue
      bucket[i] += nums[index]
      if (dfs(index + 1, bucket)) {
        return true
      }
      bucket[i] -= nums[index]
    }
    return false
  }

  return dfs(0, bucket)
}