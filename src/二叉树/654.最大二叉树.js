// https://leetcode.cn/problems/maximum-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) { 
  const getMax = (arr) => {
    let maxIndex = 0
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]
        maxIndex = i
      }
    }
    return [max, maxIndex]
  }

  function recurse(arr, left, right) {
    if (arr.length === 0) return null

    const [max, maxIndex] = getMax(arr)

    const node = new TreeNode(max, null, null)
    node.left = recurse(arr.slice(left, maxIndex))
    node.right = recurse(arr.slice(maxIndex + 1, right))
    
    return node
  }

  return recurse(nums, 0, nums.length)
}