// https://leetcode.cn/problems/missing-two-lcci/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var missingTwo = function(nums) {
  const n = nums.length + 2
  let x = 0

  for (let i = 0; i < nums.length; i++) {
    x ^= nums[i]
  }
  // 重新加上 1 - n的数字，这样就能保证消失的两个数字 x1,x2 出现一次，其他的数字出现了两次
  for (let i = 1; i <= n; i++) {
    x ^= i
  }
  // 这里的x就是消失的两个数字的异或和
  const lower1Location = x & -x  // x & -x 可以获取到最低位的1
  // x1 x2 一定是一个在该位置是0，一个在该位置是1，这样异或后才是1
  let x1 = 0
  let x2 = 0
  // 根据 lower1Location 这个位置是1还是0进行分类异或
  for (let i = 0; i < nums.length; i++) {
    // 如果这样写(nums[i] & lower1Location) === 0 需要加括号，不然会有问题
    if (lower1Location & nums[i]) {
      x1 ^= nums[i]
    } else {
      x2 ^= nums[i]
    }
  }
  for (let i = 1; i <= n; i++) {
    if (lower1Location & i) {
      x1 ^= i
    } else {
      x2 ^= i
    }
  }
  return [x1, x2]
}