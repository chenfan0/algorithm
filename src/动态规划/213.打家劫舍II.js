// https://leetcode.cn/problems/house-robber-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const n = nums.length
  if (n === 1) return nums[0]
  if (n === 2) return Math.max(nums[0], nums[1])
  const dp1 = new Array(n - 1).fill(0)
  const dp2 = new Array(n - 1).fill(0)
  dp1[0] = nums[0]
  dp1[1] = Math.max(nums[0], nums[1])
  dp2[0] = nums[1]
  dp2[1] = Math.max(nums[1], nums[2])
  for (let i = 2; i < n - 1; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + nums[i])
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i + 1])
  }
  return Math.max(dp1[n - 2], dp2[n - 2])
}

/**
 * @param {number[]} nums
 * @return {number}
 */
// 空间复杂度 o1
var rob = function(nums) {
  const n = nums.length
  if (n === 1) return nums[0]
  if (n === 2) return Math.max(nums[0], nums[1])
  let prev = nums[0], _prev = nums[1], cur = Math.max(nums[0], nums[1]), _cur = Math.max(nums[1], nums[2])

  for (let i = 2; i < n - 1; i++) {
    const temp = cur, _temp = _cur
    cur = Math.max(cur, prev + nums[i])
    _cur = Math.max(_cur, _prev + nums[i + 1])
    prev = temp
    _prev = _temp
  }
  return Math.max(cur, _cur)
}