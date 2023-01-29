// https://leetcode.cn/problems/majority-element/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // 使用map，还可以排序取中间值
  const map = new Map()
  let maxTime = 0, maxNum
  for (const num of nums) {
    const time = map.get(num) ?? 0
    map.set(num, time + 1)
  }
  map.forEach((time, num) => {
    if (time > maxTime) {
      maxTime = time
      maxNum = num
    }
  })
  return maxNum
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // 相同++，不同--，最终剩下来的就是多数的
  let res = nums[0]
  let count = 1

  for (let i = 1; i < nums.length; i++) {
    if (res === nums[i]) {
      // 相同count++
      count++
    } else {
      // 不同count--
      if (count === 0) {
        // 如果count为0
        count = 1
        res = nums[i]
      } else {
        count--
      }
    }
  }
  return res
}