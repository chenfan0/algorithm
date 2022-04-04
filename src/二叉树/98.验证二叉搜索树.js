// https://leetcode-cn.com/problems/validate-binary-search-tree/

// 二叉搜索树的中序遍历是递增的
function isValidBST(root) {
  let lastValue = Number.MIN_SAFE_INTEGER

  function recurse(node) {
    if (!node) return true
    const isBST = recurse(node.left)
    // 左子树不是BST或者当前节点的值小于上一个节点，返回false
    if (lastValue >= node.val || !isBST) return false
    lastValue = node.val
    return recurse(node.right)
  }

  return recurse(root)
}
