// https://leetcode-cn.com/problems/jump-game/
// 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 判断你是否能够到达最后一个下标。

function canJump(nums) {
  const len = nums.length
  // 当前能到达的最远位置
  let maxPos = 0

  // 这里 len - 1, 是因为不需要到最后一个
  for (let i = 0; i < len - 1; i++) {
    const step = nums[i]
    maxPos = Math.max(maxPos, i + step)
    // 如果能到达的位置已经大于或等于数组长度，直接返回true
    if (maxPos >= len) return true
    // 如果当前到达最远位置了，并且step === 0说明走不到最远位置
    if (maxPos === i && step === 0) {
      return false
    }
  }
  return true

}
