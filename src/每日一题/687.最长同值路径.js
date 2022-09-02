// https://leetcode.cn/problems/longest-univalue-path/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function (root) { 
  let res = 0

  function dfs(node) {
    if (!node) return 0
    const val = node.val
    const left = dfs(node.left)
    const right = dfs(node.right)
    let _left = 0, _right = 0

    if (node.left && node.left.val === val) {
      _left = left + 1
    }
    if (node.right && node.right.val === val) {
      _right = right + 1
    }
    res = Math.max(res, _left + _right)

    // 因为是两个节点的路径，所以这里返回左子树和右子树最大的那一个
    return Math.max(_left, _right)
  }
  dfs(root)
  return res
}