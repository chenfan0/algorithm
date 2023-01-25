// https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
function flatten(root) {
  if (!root) return []

  const res = []
  // 先对该树进行前序遍历，在遍历过程中将每个节点保存到res数组中
  
  function recurse(node) {
    res.push(node)
    if (node.left) {
      recurse(node.left)
    }
    if (node.right) {
      recurse(node.right)
    }
  }
  recurse(root)
  // 然后对该数组进行遍历处理节点
  for (let i = 0; i < res.length; i++) {
    const node = res[i]
    if (i === res.length - 1) {
      node.left = null
      node.right = null
    } else {
      node.left = null
      node.right = res[i + 1]
    }
  }
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
function flatten(root) {
  // 递归
  if (!root) return null
  const right = root.right
  root.right = root.left
  root.left = null
  flatten(root.right)
  flatten(right)

  while (root.right) {
    root = root.right
  }
  root.right = right
}