// https://leetcode.cn/problems/bu-ke-pai-zhong-de-shun-zi-lcof/description/


/**
 * @param {number[]} nums
 * @return {boolean}
 */


var isStraight = function(nums) {
  // 排序记录多少个王，然后判断最后最大值减索引为王个数的值的差是否小于5即可
  nums.sort((x, y) => x - y)
  let jokeCount = 0

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] && nums[i - 1] !== 0) {
      return false
    }
    if (nums[i - 1] === 0) {
      jokeCount++
    }
  }

  return nums[4] - nums[jokeCount] < 5
}