// https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/


function minDepth(root) {
  if (!root) return 0
  let minDepth = Number.MAX_SAFE_INTEGER

  function recurse(node, depth) {
    // 当前的深度已经大于目前的最小深度时，直接返回
    if (depth > minDepth) {
      return
    }
    // 当该节点是叶子节点时和最小值进行比较
    if (!node.left && !node.right) {
      minDepth = Math.min(depth, minDepth)
      return
    }
    if (node.left) {
      recurse(node.left, depth + 1)
    }
    if (node.right) {
      recurse(node.right, depth + 1)
    }
  }
  recurse(root, 1)
  return minDepth
}
