// https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

function kthSmallest(root, k) {
  const stack = []
  let i = 1
  while (stack.length > 0 || root) {
    if (root) {
      stack.push(root)
      root = root.left
    } else {
      const node = stack.pop()
      if (i === k) {
        return node.val
      }
      root = node.right
      i++
    }
  }
}