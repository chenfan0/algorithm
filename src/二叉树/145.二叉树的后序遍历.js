// https://leetcode-cn.com/problems/binary-tree-postorder-traversal/


function postorderTraversal(root) {
  if (root === null) return []
  const result = []
  const stack = [root]

  while (stack.length > 0) {
    const node = stack.pop()
    result.push(node.val)
    if (node.left) {
      stack.push(node.left)
    }
    if (node.right) {
      stack.push(node.right)
    }
  }
  return result.reverse()
}

