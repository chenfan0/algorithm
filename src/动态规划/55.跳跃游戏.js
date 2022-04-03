// https://leetcode-cn.com/problems/jump-game/
// 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 判断你是否能够到达最后一个下标。

const nums = [2, 3, 1, 1, 4];

function canJump(nums) {
  // 如果只有nums的长度为1，直接返回true
  if (nums.length === 1) return true
  // 如nums的长度为0，直接返回false
  if (nums[0] === 0) return false
  // max用来记录当前所能到达的最远距离
  let max = 0
  for (let i = 0; i < nums.length - 1; i++) {
    const item = nums[i]
    // max 与 item + i 取大值
    max = Math.max(max, item + i)
    // 如果当前能到达的最大距离已经超过nums.length - 1，则直接返回true
    if (max >= nums.length - 1) return true
    // 如果当前跳跃步数为0，并且当前的位置是
    if (item === 0 && i === max) return false
  }

}
