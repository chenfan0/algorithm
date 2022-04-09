// https://leetcode-cn.com/problems/balanced-binary-tree/

function isBalanced(root) {
  if (!root) return true
  
  function process(node) {
    if (node === null) {
      return {
        isBalanced: true,
        height: 0
      }
    }
    const left = process(node.left)
    const right = process(node.right)

    const height = Math.max(left.height, right.height) + 1
    let isBalanced = false
    // 左子树是平衡的，右子树是平衡的，左子树和右子树的高度差不为1，这当前树为平衡二叉树。
    if (left.isBalanced && right.isBalanced && Math.abs(left.height - right.height) <= 1) {
      isBalanced = true
    }
    return {
      isBalanced,
      height
    }
  }
  return process(root).isBalanced
}