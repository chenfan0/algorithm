// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/

function inorderTraversal(root) {
  const stack = []
  const result = []

  while (stack.length > 0 || root !== null) {
    if (root !== null) {
      stack.push(root)
      root = root.left
    } else {
      const node = stack.pop()
      result.push(node.val)
      root = node.right
    }
  }
  return result
}