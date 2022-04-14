// https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/

/**
 * @param {TreeNode} root
 * @return {number}
 */

function sumNumbers(root) {
  if (!root) return 0
  let sum = 0

  function recurse(node, prev) {
    prev = prev * 10 + node.val
    if (!node.left && !node.right) {
      sum += prev
      return
    }
    if (node.left) {
      recurse(node.left, prev)
    }
    if (node.right) {
      recurse(node.right, prev)
    }
  }
  recurse(root, 0)
  return sum
}