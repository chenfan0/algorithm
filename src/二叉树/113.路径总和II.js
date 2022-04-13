// https://leetcode-cn.com/problems/path-sum-ii/
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */

function pathSum(root, targetSum) {
  if (!root) return []
  const res = []

  function recurse(node, curSum, path) {
    curSum += node.val

    if (curSum === targetSum && !node.left && !node.right) {
      res.push([...path, node.val])
      return
    }
    if (node.left) {
      path.push(node.val)
      recurse(node.left, curSum, path)
      path.pop()
    }
    if (node.right) {
      path.push(node.val)
      recurse(node.right, curSum, path)
      path.pop()
    }
  }
  recurse(root, 0, [])
  return res
}
