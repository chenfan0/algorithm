/*
 * @lc app=leetcode.cn id=1123 lang=javascript
 *
 * [1123] 最深叶节点的最近公共祖先
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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
  const dfs = (node) => {
    if (!node) {
      return [0, node]
    }

    const [deep1, lca1] = dfs(node.left)
    const [deep2, lca2] = dfs(node.right)

    if (deep1 > deep2) { // 左子树有最深的叶子节点
      return [deep1 + 1, lca1]
    } else if (deep1 < deep2) { // 右子树有最深的叶子节点
      return [deep2 + 1, lca2]
    } else {
      return [deep1 + 1, node] // 左子树和右子树最深叶子节点深度是一致的
    }
  }
  return dfs(root)[1];
};
// @lc code=end

