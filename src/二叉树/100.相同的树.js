// https://leetcode-cn.com/problems/same-tree/

function isSameTree(p, q) {
  // 两个节点都为空，直接返回true
  if (p === null && q === null) return true
  // 有一个为空，一个不为空，返回false
  if (p === null || q === null) return false
  // 节点对应的val不同，返回false
  if (p.val !== q.val) return false
  // 递归处理左子树和右子树
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
