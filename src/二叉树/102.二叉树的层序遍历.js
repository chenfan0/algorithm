// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

function levelOrder(root) {
  if (!root) return []
  root.level = 1
  const queue = [root]
  const result = []
  let help = []
  let level = 1

  while (queue.length > 0) {
    const node = queue.shift()
    const nLevel = node.level

    // 当当前的节点的层级大于level，则表明是下一层的数据了
    if (nLevel > level) {
      result.push(help)
      help = [node.val]
      level++
    } else {
      help.push(node.val)
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
  // 最后需要判断help是否有值
  if (help.length > 0) {
    result.push(help)
  }
  return result
}

function levelOrder(root) {
  if (!root) return []
  const res = []
  const queue = [root]

  while (queue.length) {
    const levelSize = queue.length
    const currentRes = []

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
      currentRes.push(node.val)
    }
    res.push(currentRes)
  }
  return res
}