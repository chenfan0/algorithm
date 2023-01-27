/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // 0 异或任何数等于任何数
  let res = 0

  for (const num of nums) {
    res ^= num
  }
  return res
};