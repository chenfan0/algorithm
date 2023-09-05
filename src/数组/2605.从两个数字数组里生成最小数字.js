/*
 * @lc app=leetcode.cn id=2605 lang=javascript
 *
 * [2605] 从两个数字数组里生成最小数字
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {
  const compare = (a, b) => a - b

  nums1.sort(compare)
  nums2.sort(compare)

  for (const num of nums1) {
    if (nums2.includes(num)) {
      return num
    }
  }
  if (nums1[0] < nums2[0]) {
    return Number('' + nums1[0] + nums2[0])
  } else {
    return Number('' + nums2[0] + nums1[0])
  }
};
// @lc code=end

