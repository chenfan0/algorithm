// https://leetcode-cn.com/problems/symmetric-tree/

function isSymmetric(root) {
  // 如果根节点为null，则返回true
  if (!root) return true

  function process(left, right) {
    // 当left和right都为null，则返回true
    if (left === null && right === null) return true
    // 当left和right只有一个为null，则返回false
    if (left === null || right === null) return false
    // 当left和right对应的val值不相同，则返回false
    if (left.val !== right.val) return false
    // 递归left节点的左子树和right节点的右子树
    // 以及left节点的右子树和right节点的左子树
    return process(left.left, right.right) && process(left.right, right.left)
  }

  return process(root.left, root.right)
}