// https://leetcode-cn.com/problems/invert-binary-tree/

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function invertTree(root) {
  if (!root) return null
  const temp = root.left
  root.left = root.right
  root.right = temp
  invertTree(root.left)
  invertTree(root.right)
  return root
}