// https://leetcode.cn/problems/next-greater-element-ii/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var nextGreaterElements = function(nums) {
  // 遇到数组或者字符串可以循环的，可以考虑拼接双份数组或者字符串，然后进行接下来的操作
  // 也可以通过取余当前字符串或者数组的长度进行获取数据
  const stack = []
  const res = []
  const len = nums.length

  for (let i = len * 2 - 1; i >= 0; i--) {
    const cur = nums[i % len]

    while (stack.length && stack[stack.length - 1] <= cur) {
      stack.pop()
    }
    if (i < len) {
      res[i] = stack.length ? stack[stack.length - 1] : -1
    }
    stack.push(cur)
  }
  return res
};