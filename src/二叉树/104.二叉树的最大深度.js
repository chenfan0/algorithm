// https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/

function maxDepth(root) {
  if (!root) return 0
  let max = 1

  function process(node, depth) {
    if (!node) {
      max = Math.max(max, depth - 1)
      return
    }
    process(node.left, depth + 1)
    process(node.right, depth + 1)
  }
  process(root, 1)
  return max
}