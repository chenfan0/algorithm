/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  const len = nums.length
  if (len === 0) return []
  if (len === 1) return [nums[0] + '']
  const res = []
  let start = nums[0]

  const getResItem = (start, end) => {
    return start === end ? `${start}` : `${start}->${end}`
  }

  for (let i = 1; i < len; i++) {
    if (nums[i] - nums[i - 1] !== 1) {
      res.push(getResItem(start, nums[i - 1]))
      start = nums[i]
    }
    if (i === len - 1) {
      res.push(getResItem(start, nums[i]))
    }
  }
  return res

};
// @lc code=end

