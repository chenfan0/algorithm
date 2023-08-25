/*
 * @lc app=leetcode.cn id=1448 lang=javascript
 *
 * [1448] 统计二叉树中好节点的数目
 */

// @lc code=start
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
var goodNodes = function(root) {
  let res = 0
  const dfs = (node, maxVal) => {
    if (!node) return
    if (node.val >= maxVal) {
      res++
      maxVal = node.val
    }
    dfs(node.left, maxVal)
    dfs(node.right, maxVal)
  }
  dfs(root, root.val)
  return res
};
// @lc code=end

