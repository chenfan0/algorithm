// https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/

function zigzagLevelOrder(root) {
  if (!root) return []
  const result = []
  const queue = [root]
  let help = []
  root.level = 1
  let level = 1
  while (queue.length > 0) {
    const node = queue.shift()
    const nLevel = node.level

    if (nLevel > level) {
      result.push(help)
      help = [node.val]
      level++
    } else {
      // 根据当前层级的不同使用插入方案
      if (level % 2 === 0) {
        help.unshift(node.val)
      } else {
        help.push(node.val)
      }
    }
    if (node.left) {
      node.left.level = nLevel + 1
      queue.push(node.left)
    }
    if (node.right) {
      node.right.level = nLevel + 1
      queue.push(node.right)
    }
  }
  if (help.length > 0) {
    result.push(help)
  }
  return result
}