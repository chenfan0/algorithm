// https://leetcode.cn/problems/next-greater-element-i/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const stack = []
  const map = new Map()
  const len = nums2.length

  for (let i = len - 1; i >= 0; i--) {
    const cur = nums2[i]

    while (stack.length && stack[stack.length - 1] <= cur) {
      stack.pop()
    }
    map.set(cur, stack.length ? stack[stack.length - 1] : -1)
    stack.push(cur)
  }

  return nums1.map(val => map.get(val))
}
