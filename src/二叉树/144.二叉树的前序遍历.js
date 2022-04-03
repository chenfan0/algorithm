// https://leetcode-cn.com/problems/binary-tree-preorder-traversal/

// 递归实现
function preorderTraversal(root) {
  const result = []
  function recurse(node) {
    if (node === null) return
    result.push(node.val)
    recurse(node.left)
    recurse(node.right)
  }
  recurse(root)
  return result
}

// 非递归实现
function preorderTraversal(root) {
  if (root === null) return []
  
  const stack = [root]
  const result = []

  while (stack.length > 0) {
    const node = stack.pop()
    result.push(node.val)
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }
  return result
}