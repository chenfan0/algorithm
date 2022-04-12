// https://leetcode-cn.com/problems/path-sum/

function hasPathSum(root, targetSum) {
  if (!root) return false

  function recurse(node, curSum) {
    curSum += node.val

    // 如果当前的节点为叶子节点并且当前的值和targetSum相等，返回true
    if (!node.left && !node.right && curSum === targetSum) {
      return true
    }

    let res = false

    if (node.left) {
      res = recurse(node.left)
    }
    // 当有右子树并且左子树中没有找到该值，对右子树进行查找
    if (node.right && !res) {
      res = recurse(node.right)
    }

    return res
  }

  return recurse(root, 0)
}